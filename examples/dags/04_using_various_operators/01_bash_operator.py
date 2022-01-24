from datetime import datetime, timedelta

from airflow import DAG
from airflow.operators.bash import BashOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="01_bash_operator",
    description="BashOperator를 사용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "04_using_various_operators"],
) as dag:

    task_1 = BashOperator(task_id="task_1", bash_command="echo Hello")
    task_2 = BashOperator(
        task_id="task_2", bash_command="echo $VAR", env={"VAR": "World!"}
    )

    task_1 >> task_2
