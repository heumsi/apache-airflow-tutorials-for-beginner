from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.utils.task_group import TaskGroup
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="01_task_groups",
    description="TaskGroup을 가지는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "03_visualization_and_documentation_dags"],
) as dag:

    def dump() -> None:
        sleep(3)

    task_1 = PythonOperator(task_id="task_1", python_callable=dump)

    with TaskGroup("group_1") as task_group:
        task_2 = PythonOperator(task_id="task_2", python_callable=dump)
        task_3 = PythonOperator(task_id="task_3", python_callable=dump)
        task_4 = PythonOperator(task_id="task_4", python_callable=dump)

        task_2 >> task_4
        task_3 >> task_4

    task_5 = PythonOperator(task_id="task_5", python_callable=dump)

    task_1 >> task_group >> task_5
