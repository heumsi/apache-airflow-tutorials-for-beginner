from datetime import timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import BranchPythonOperator, PythonOperator
from airflow.utils.dates import days_ago
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="05_conditional_tasks_with_depends_on_past_dag",
    description="테스크 흐름에 depends_on_past를 통해 조건문을 가지는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=days_ago(2),
    schedule_interval=timedelta(days=1),
    tags=["example"],
) as dag:

    def dump() -> None:
        sleep(3)

    def must_fail() -> None:
        raise

    t1 = PythonOperator(task_id="t1", python_callable=dump)
    t2 = PythonOperator(task_id="t2", python_callable=must_fail, depends_on_past=True)
    t3 = PythonOperator(task_id="t3", python_callable=dump)

    t1 >> t2 >> t3
