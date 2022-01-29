from datetime import datetime

from airflow import DAG
from airflow.models import TaskInstance
from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="01_xcoms",
    description="XCom을 활용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "05_etc_features"],
) as dag:

    def push_value_to_xcom(**kwargs):
        task_instance: TaskInstance = kwargs["task_instance"]
        task_instance.xcom_push(key="hello", value="world")

    def return_value_to_xcom():
        return "hello world"

    def pull_value_from_xcom(**kwargs):
        task_instance: TaskInstance = kwargs["task_instance"]

        value_from_pushed = task_instance.xcom_pull(key="hello")
        print(value_from_pushed)  # world

        value_from_returned = task_instance.xcom_pull(task_ids="return_value_to_xcom")
        print(value_from_returned)  # hello world

        value_from_pushed_through_template = task_instance.xcom_pull(key="welcome")
        print(value_from_pushed_through_template)  # airflow

    task_1 = PythonOperator(
        task_id="push_value_to_xcom", python_callable=push_value_to_xcom
    )

    task_2 = PythonOperator(
        task_id="return_value_to_xcom", python_callable=return_value_to_xcom
    )

    task_3 = BashOperator(
        task_id="push_value_to_xcom_through_template",
        bash_command='echo "{{ task_instance.xcom_push(key="welcome", value="airflow") }}"',
    )

    task_4 = PythonOperator(
        task_id="pull_value_from_xcom", python_callable=pull_value_from_xcom
    )

    task_1 >> task_2 >> task_3 >> task_4
