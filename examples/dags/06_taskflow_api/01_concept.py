from datetime import datetime

from airflow.decorators import dag, task
from pendulum.tz.timezone import Timezone


@dag(
    dag_id="01_concept",
    description="Taskflow API를 사용하는 간단한 DAG 예제입니다.",
    default_args={
        "owner": "heumsi",
        "retries": 0,
    },
    start_date=datetime(2022, 1, 20, tzinfo=Timezone("Asia/Seoul")),
    schedule_interval="@once",
    tags=["examples", "06_taskflow_api"],
)
def main():
    """Taskflow API를 사용하는 간단한 DAG 예제입니다.

    1. print_hello()와 get_first_word_from_param_and_return() 를 실행합니다.
    2. get_first_word_from_param_and_return() 이 성공하면 get_last_word_from_param()를 실행합니다.
    """

    @task
    def print_hello() -> None:
        """hello를 출력합니다."""

        print("hello")

    @task
    def get_first_word_from_param_and_return(param: str) -> str:
        """문자열 param의 첫 번째 단어를 출력하고, param을 반환합니다."""

        first_word = param.split()[0]
        print(first_word)  # welcome
        return param

    @task
    def get_last_word_from_param(param: str) -> None:
        """문자열 param의 마지막 단어를 출력합니다."""

        last_word = param.split()[-1]
        print(last_word)  # tutorials

    @task
    def print_kwargs(**kwargs) -> None:
        print(kwargs)

    print_hello()
    ret = get_first_word_from_param_and_return("welcome to airflow tutorials")
    get_last_word_from_param(ret)
    print_kwargs()


dag = main()
