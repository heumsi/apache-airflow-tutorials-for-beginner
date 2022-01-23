from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.trigger_dagrun import TriggerDagRunOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="01_trigger_dagrun",
    description="다른 DAG의 DAG Run을 Trigger하는 DAG 예제입니다",
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
    trigger_task = TriggerDagRunOperator(
        task_id="trigger_task",
        trigger_dag_id="00_to_be_triggered_by_other_dags",
        conf=None,
        trigger_run_id=None,
        execution_date=None,
        reset_dag_run=False,
        wait_for_completion=False,
        poke_interval=60,
        allowed_states=["success"],
        failed_states=None,
    )
    task_3 = PythonOperator(task_id="task_3", python_callable=dump)

    task_1 >> trigger_task >> task_3
