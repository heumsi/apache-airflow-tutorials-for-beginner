from datetime import datetime, timedelta

from airflow import DAG
from airflow.operators.email import EmailOperator
from pendulum.tz.timezone import Timezone

with DAG(
    dag_id="05_email_operator",
    description="EmailOperator 사용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 1,
        "retry_delay": timedelta(minutes=1),
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "04_using_various_operators"],
) as dag:

    task = EmailOperator(
        task_id="send_to_email",
        to="heumsi@naver.com",
        subject="Airflow에서 보낸 Email입니다.",
        html_content="""
            <h1>Airflow에서 보낸 Email입니다.</h1>
            <p>Airflow에서 보낸 Email 입니다!</p>
        """,
    )
