from datetime import datetime, timedelta
from time import sleep

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.subdag import SubDagOperator
from pendulum.tz.timezone import Timezone


def dump() -> None:
    sleep(3)


def get_subdag(parent_dag_id: str, dag_name: str) -> DAG:
    with DAG(
        dag_id=f"{parent_dag_id}.{dag_name}",
        description=f"{parent_dag_id}의 SubDag 입니다.",
        default_args={
            "owner": "heumsi",
            "retries": 0,
            "retry_delay": timedelta(minutes=1),
        },
        start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
        schedule_interval="@once",
        tags=["example"],
    ) as dag:

        sub_task_start = PythonOperator(task_id=f"sub_task_start", python_callable=dump)
        sub_tasks = []
        for i in range(5):
            sub_task = PythonOperator(task_id=f"sub_task_{i}", python_callable=dump)
            sub_tasks.append(sub_task)
        sub_task_end = PythonOperator(task_id=f"sub_task_end", python_callable=dump)

        sub_task_start >> sub_tasks >> sub_task_end

        return dag


dag_id = "08_subdag"

with DAG(
    dag_id=dag_id,
    description="Task 흐름에 SubDAG을 가지는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["example"],
) as dag:

    task_start = PythonOperator(task_id="task_start", python_callable=dump)
    subdag = SubDagOperator(
        task_id="subdag", subdag=get_subdag(parent_dag_id=dag_id, dag_name="subdag")
    )
    task_end = PythonOperator(task_id="task_end", python_callable=dump)

    task_start >> subdag >> task_end
