from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.sensors.external_task import ExternalTaskSensor
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="02_waiting_tasks_in_another_dagrun",
    description="다른 DAG Run의 Task를 기다리는 DAG 예제입니다",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "02_dependencies_between_dags"],
) as dag:

    def dump() -> None:
        sleep(3)

    task_1 = PythonOperator(task_id="task_1", python_callable=dump)
    wait_for_01_trigger_dagrun_task_3 = ExternalTaskSensor(
        task_id="wait_for_01_trigger_dagrun.task_3",
        external_dag_id="01_trigger_dagrun",
        external_task_id="task_3",
        allowed_states=["success"],
        failed_states=None,
        execution_delta=None,
        execution_date_fn=None,
        check_existence=False,
    )
    task_3 = PythonOperator(task_id="task_3", python_callable=dump)

    task_1 >> wait_for_01_trigger_dagrun_task_3 >> task_3
