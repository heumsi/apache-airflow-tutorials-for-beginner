from datetime import datetime

from airflow import DAG
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="01_concept_pyoperator_version",
    description="Taskflow API를 사용한 '01_concept' DAG을 PythonOperator로 다시 작성한 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "06_taskflow_api"],
    doc_md="""
        Taskflow API를 사용하는 간단한 DAG 예제입니다.

        1. print_hello()와 get_first_word_from_param_and_return() 를 실행합니다.
        2. get_first_word_from_param_and_return() 이 성공하면 get_last_word_from_param()를 실행합니다.
    """,
) as dag:

    def print_hello() -> None:
        """hello를 출력합니다."""

        print("hello")

    def get_first_word_from_param_and_return(param: str) -> str:
        """문자열 param의 첫 번째 단어를 출력하고, param을 반환합니다."""

        first_word = param.split()[0]
        print(first_word)
        return param

    def get_last_word_from_param(param: str) -> None:
        """문자열 param의 마지막 단어를 출력합니다."""

        last_word = param.split()[-1]
        print(last_word)

    def print_kwargs(**kwargs) -> None:
        print(kwargs)

    task_1 = PythonOperator(task_id="print_hello", python_callable=print_hello)

    task_2 = PythonOperator(
        task_id="get_first_word_from_param_and_return",
        python_callable=get_first_word_from_param_and_return,
        op_args=[
            "welcome to airflow tutorials",
        ],
    )

    task_3 = PythonOperator(
        task_id="get_last_word_from_param",
        python_callable=get_last_word_from_param,
        op_args=[
            "{{ task_instance.xcom_pull(task_ids='get_first_word_from_param_and_return') }}"
        ],
    )

    task_4 = PythonOperator(task_id="print_kwargs", python_callable=print_kwargs)

    task_2 >> task_3
