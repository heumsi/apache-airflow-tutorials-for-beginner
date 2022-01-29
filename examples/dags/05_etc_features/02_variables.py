from datetime import datetime

from airflow import DAG
from airflow.models import TaskInstance, Variable
from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="02_variables",
    description="Variables를 활용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "05_etc_features"],
) as dag:

    def print_variables() -> None:
        var = Variable.get(key="hello")
        print(var)  # hello

        var = Variable.get(key="not_existing_key", default_var="default value")
        print(var)  # default value

        var = Variable.get(key="json_data", deserialize_json=True)
        print(var["welcome"])  # aiflow
        print(var["author"])  # heumsi

    task_1 = PythonOperator(task_id="print_variables", python_callable=print_variables)
