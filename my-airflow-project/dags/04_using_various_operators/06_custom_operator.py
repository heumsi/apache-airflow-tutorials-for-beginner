from datetime import datetime
from typing import Any, Dict

from airflow import DAG
from airflow.models.baseoperator import BaseOperator
from pendulum.tz.timezone import Timezone


class PrintSQLOperator(BaseOperator):
    ui_color = "#000000"
    ui_fgcolor = "#ffffff"
    template_fields = ["name", "sql"]
    template_ext = [".sql"]

    def __init__(self, name: str, sql: str, **kwargs) -> None:
        super().__init__(**kwargs)
        self.name = name
        self.sql = sql

    def execute(self, context: Dict[str, Any]) -> None:
        print(f"name: {self.name}")
        print(f"sql: {self.sql}")


with DAG(
    dag_id="06_custom_operator",
    description="CustomOperator를 사용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "04_using_various_operators"],
) as dag:

    task = PrintSQLOperator(
        task_id="print_sql",
        name="{{ task_instance.task_id }}",
        sql="06_custom_operator.sql",
    )
