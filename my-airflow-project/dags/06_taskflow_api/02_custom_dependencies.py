from datetime import datetime

from airflow.decorators import dag, task
from pendulum.tz.timezone import Timezone


@dag(
    dag_id="02_custom_dependencies",
    description="Taskflow API의 의존성을 커스텀하게 작성하는 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "06_taskflow_api"],
)
def main():
    @task
    def print_hello() -> None:
        """hello를 출력합니다."""

        print("hello")

    @task
    def get_first_word_from_param_and_return(param: str) -> str:
        """문자열 param의 첫 번째 단어를 출력하고, param을 반환합니다."""

        first_word = param.split()[0]
        print(first_word)
        return param

    @task
    def get_last_word_from_param(param: str) -> None:
        """문자열 param의 마지막 단어를 출력합니다."""

        last_word = param.split()[-1]
        print(last_word)

    task_1 = print_hello()
    task_2 = get_first_word_from_param_and_return("welcome to airflow tutorials")
    task_3 = get_last_word_from_param(task_2)

    task_1 >> task_2 >> task_3


dag = main()
