from datetime import datetime

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.providers.postgres.hooks.postgres import PostgresHook
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="03_connections_and_hooks",
    description="Connection과 Hook을 활용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "05_etc_features"],
) as dag:

    postgres_hook = PostgresHook(postgres_conn_id="airflow_database")

    def test_connection() -> None:
        is_connected, message = postgres_hook.test_connection()
        print(is_connected)
        print(message)

    def get_variables() -> None:
        records = postgres_hook.get_records(sql="SELECT * FROM variable")
        for record in records:
            print(record)

    task_1 = PythonOperator(task_id="test_connection", python_callable=test_connection)
    task_2 = PythonOperator(task_id="get_variables", python_callable=get_variables)

    task_1 >> task_2
