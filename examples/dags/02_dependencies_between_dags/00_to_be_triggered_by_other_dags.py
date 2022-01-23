from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="00_to_be_triggered_by_other_dags",
    description="다른 DAG에 의해 Trigger 될 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval=None,  # None으로 두었기 때문에 직접 Trigger 할 때만 DAG Run이 생성됩니다.
    tags=["examples", "02_dependencies_between_dags"],
) as dag:

    def dump() -> None:
        sleep(3)

    task_1 = PythonOperator(task_id="task_1", python_callable=dump)
    task_2 = PythonOperator(task_id="task_2", python_callable=dump)
    task_3 = PythonOperator(task_id="task_3", python_callable=dump)

    task_1 >> task_2 >> task_3
