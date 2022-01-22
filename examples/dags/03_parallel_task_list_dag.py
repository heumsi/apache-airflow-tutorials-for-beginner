from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="03_task_list_dag",
    description="병렬적인 테스크를 리스트로 가지는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["example"],
) as dag:

    def dump() -> None:
        sleep(3)

    start_task = PythonOperator(task_id="start_task", python_callable=dump)

    task_list = []
    for i in range(5):
        task = PythonOperator(task_id=f"task_{i}", python_callable=dump)
        task_list.append(task)

    end_task = PythonOperator(task_id="end_task", python_callable=dump)

    start_task >> task_list >> end_task
