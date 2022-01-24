from datetime import datetime, timedelta

from airflow import DAG
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="02_python_operator",
    description="PythonOperator를 사용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "04_using_various_operators"],
) as dag:

    def print_hello() -> None:
        print("hello")

    def print_arguments(first_arg: str, second_arg: str) -> None:
        print(first_arg)
        print(second_arg)

    class PrintHello:
        def __init__(self, first_arg: str) -> None:
            self.first_arg = first_arg

        def __call__(self, second_arg: str) -> None:
            print(self.first_arg)
            print(second_arg)

    def print_kwargs(**kwargs) -> None:
        print(kwargs)

    def print_templates_dict(execution_date: datetime) -> None:
        print(execution_date)

    task_1 = PythonOperator(task_id="print_hello", python_callable=print_hello)
    task_2 = PythonOperator(
        task_id="print_arguments",
        python_callable=print_arguments,
        op_args=["welcome"],
        op_kwargs={"second_arg": "airflow"},
    )
    task_3 = PythonOperator(
        task_id="PrintHello",
        python_callable=PrintHello(first_arg="welcome"),
        op_kwargs={"second_arg": "airflow"},
    )
    task_4 = PythonOperator(task_id="print_kwargs", python_callable=print_kwargs)
    task_5 = PythonOperator(
        task_id="print_templates_dict",
        python_callable=print_templates_dict,
        templates_dict={"execution_date": "{{ ds }}"},
    )

    task_1 >> task_2 >> task_3 >> task_4 >> task_5
