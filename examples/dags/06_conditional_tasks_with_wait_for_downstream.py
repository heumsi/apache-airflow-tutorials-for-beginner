from datetime import timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.utils.dates import days_ago

with DAG(
    dag_id="06_conditional_tasks_with_wait_for_downstream",
    description="Task 흐름에 with_wait_for_downstream을 통해 조건문을 가지는 DAG 예제입니다.",
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

    t1 = PythonOperator(
        task_id="task_1", python_callable=dump, wait_for_downstream=True
    )
    t2 = PythonOperator(task_id="task_2", python_callable=must_fail)
    t3 = PythonOperator(task_id="task_3", python_callable=dump)

    t1 >> t2 >> t3
