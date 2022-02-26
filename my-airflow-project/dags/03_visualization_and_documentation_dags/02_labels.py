from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.utils.edgemodifier import Label
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="02_labels",
    description="Label을 가지는 DAG 예제입니다.",
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
    label_1 = Label("Label 1")
    task_2 = PythonOperator(task_id="task_2", python_callable=dump)
    label_2 = Label("Label 2")
    task_3 = PythonOperator(task_id="task_3", python_callable=dump)

    task_1 >> label_1 >> task_2 >> label_2 >> task_3
