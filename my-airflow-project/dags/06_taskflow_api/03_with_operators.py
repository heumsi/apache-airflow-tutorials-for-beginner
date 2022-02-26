from datetime import datetime

from airflow.decorators import dag, task
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone


@dag(
    dag_id="03_with_operators",
    description="Operator와 Taskflow API를 같이 활용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "06_taskflow_api"],
)
def main():
    def get_first_word_from_param_and_return(param: str) -> str:
        """문자열 param의 첫 번째 단어를 출력하고, param을 반환합니다."""

        first_word = param.split()[0]
        print(first_word)
        return param

    @task
    def get_last_word_from_param_and_return(param: str) -> str:
        """문자열 param의 마지막 단어를 출력하고, param을 반환합니다."""

        last_word = param.split()[-1]
        print(last_word)
        return param

    def print_param(param: str) -> None:
        """문자열 param을 출력합니다"""
        print(param)

    task_1 = PythonOperator(
        task_id="get_first_word_from_param_and_return",
        python_callable=get_first_word_from_param_and_return,
        op_args=[
            "welcome to airflow tutorials",
        ],
    )
    task_2 = get_last_word_from_param_and_return(task_1.output)
    task_3 = PythonOperator(
        task_id="print_param", python_callable=print_param, op_args=[task_2]
    )

    task_1 >> task_2 >> task_3


dag = main()
