from datetime import datetime

from airflow.decorators import dag, task
from pendulum.tz.timezone import Timezone


@dag(
    dag_id="04_virtualenv",
    description="Taskflow API의 virtualenv를 활용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "06_taskflow_api"],
)
def main():
    @task.virtualenv(
        requirements=[
            "emoji==1.6.3",
        ],
    )
    def print_emoji() -> None:
        import emoji

        result = emoji.emojize("Python is :thumbs_up:")
        print(result)

    print_emoji()


dag = main()
