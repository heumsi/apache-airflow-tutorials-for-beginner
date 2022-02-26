from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="07_conditional_tasks_with_trigger_rule",
    description="Task 의존성에 trigger_rule을 통해 조건문을 가지는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "01_writing_various_task_flows"],
) as dag:

    def dump() -> None:
        sleep(3)

    def must_fail() -> None:
        raise

    t1 = PythonOperator(task_id="task_1", python_callable=dump)
    t2 = PythonOperator(task_id="task_2", python_callable=dump)
    t3 = PythonOperator(task_id="task_3", python_callable=must_fail)
    t4 = PythonOperator(
        task_id="task_4", python_callable=dump, trigger_rule="one_success"
    )

    t1 >> [t2, t3] >> t4
