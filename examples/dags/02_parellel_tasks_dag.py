from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="02_parellel_tasks_dag",
    description="병렬로 테스크 의존성을 실행하는 DAG 예제입니다.",
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

    task_1 = PythonOperator(task_id="task_1", python_callable=dump)

    task_2 = PythonOperator(task_id="task_2", python_callable=dump)

    task_3 = PythonOperator(task_id="task_3", python_callable=dump)

    task_4 = PythonOperator(task_id="task_4", python_callable=dump)

    task_5 = PythonOperator(task_id="task_5", python_callable=dump)

    task_1 >> task_2 >> task_5
    task_3 >> task_4 >> task_5
