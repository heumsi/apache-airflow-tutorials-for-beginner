from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.dummy import DummyOperator
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="04_dummy_operator",
    description="DummyOperator를 사용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "04_using_various_operators"],
) as dag:

    def dump() -> None:
        sleep(3)

    first_tasks = []
    for i in range(5):
        task = PythonOperator(task_id=f"first_task_{i}", python_callable=dump)
        first_tasks.append(task)
    task_2 = DummyOperator(task_id="dummy")
    seconds_tasks = []
    for i in range(5):
        task = PythonOperator(task_id=f"second_task_{i}", python_callable=dump)
        seconds_tasks.append(task)

    first_tasks >> task_2 >> seconds_tasks
