from datetime import datetime

from airflow.decorators import dag, task
from pendulum.tz.timezone import Timezone


@dag(
    dag_id="05_docker",
    description="Taskflow API의 docker를 활용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "06_taskflow_api"],
)
def main():
    @task.docker(image="python:3.9-slim-buster")
    def print_python_version() -> None:
        import sys

        print("Current version of Python is ", sys.version)

    print_python_version()


dag = main()
