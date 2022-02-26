from datetime import datetime, timedelta

from airflow import DAG
from airflow.operators.python import PythonVirtualenvOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="03_python_virtualenv_operator",
    description="PythonVirtualenvOperator를 사용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "04_using_various_operators"],
) as dag:

    def print_dataframe() -> None:
        import pandas as pd

        df = pd.DataFrame({"A": [1, 2], "B": [3, 4]})
        print(df.head())

    def print_emoji() -> None:
        import emoji

        result = emoji.emojize("Python is :thumbs_up:")
        print(result)

    task_1 = PythonVirtualenvOperator(
        task_id="print_dataframe",
        python_callable=print_dataframe,
        requirements=[
            "pandas==1.4.0",
        ],
    )

    task_2 = PythonVirtualenvOperator(
        task_id="print_emoji",
        python_callable=print_emoji,
        python_version="3.9",
        requirements=[
            "emoji==1.6.3",
        ],
    )

    task_1 >> task_2
