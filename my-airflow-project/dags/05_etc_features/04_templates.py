from datetime import datetime

from airflow import DAG
from airflow.operators.bash import BashOperator
from pendulum.tz.timezone import Timezone


def create_message() -> str:
    return "hello airflow"


def get_first_element(string: str) -> str:
    return string.split()[0]


with DAG(
    dag_id="04_templates",
    description="Templates를 활용하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@daily",
    tags=["examples", "05_etc_features"],
    catchup=False,  # 가장 최근에 스케쥴된 Dag Run만 실행합니다.
    user_defined_macros={"author": "heumsi", "create_message": create_message},
    user_defined_filters={"get_first_element": get_first_element},
) as dag:

    task_1 = BashOperator(
        task_id="echo_template_variables",
        bash_command="""
            echo {{ dag_run.logical_date }} && \
            echo {{ data_interval_start }} && \
            echo {{ data_interval_end }}
        """,
    )

    task_2 = BashOperator(
        task_id="echo_template_variables_with_filters",
        bash_command="""
            echo {{ dag_run.logical_date | ds }} && \
            echo {{ data_interval_start | ds_nodash }} && \
            echo {{ data_interval_end | ts }}
        """,
    )

    task_3 = BashOperator(
        task_id="echo_macros",
        bash_command="""
            echo {{ macros.datetime.now() }} && \
            echo {{ macros.ds_add(dag_run.logical_date | ds , 5) }}
        """,
    )

    task_4 = BashOperator(
        task_id="echo_user_defined_macros",
        bash_command="""
            echo {{ author }} && \
            echo {{ create_message() }}
        """,
    )

    task_5 = BashOperator(
        task_id="echo_user_defined_filters",
        bash_command="""
            echo {{ 'welcome airflow' | get_first_element }}
        """,
    )
