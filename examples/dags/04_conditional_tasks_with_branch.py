import random
from datetime import datetime, timedelta
from time import sleep
from typing import List

from airflow import DAG
from airflow.operators.python import BranchPythonOperator, PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="04_conditional_tasks_with_branch_dag",
    description="Task 흐름에 Branch를 통해 조건문을 가지는 DAG 예제입니다.",
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

    def select_random(task_ids: List[str]) -> str:
        return random.choice(task_ids)

    t1 = PythonOperator(task_id="task_1", python_callable=dump)
    t2 = PythonOperator(task_id="task_2", python_callable=dump)
    t3 = PythonOperator(task_id="task_3", python_callable=dump)
    branch = BranchPythonOperator(
        task_id="branch",
        python_callable=select_random,
        op_kwargs={
            "task_ids": [t2.task_id, t3.task_id],
        },
    )

    t1 >> branch >> [t2, t3]
