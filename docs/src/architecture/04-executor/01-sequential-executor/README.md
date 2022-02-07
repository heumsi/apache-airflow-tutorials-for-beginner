# Sequential Executor

Sequential Executor는 Airflow를 설치하고 별다른 설정을 하지 않으면 기본으로 설정되는 Executor입니다.
한편 Airflow의 Meta Database가 기본 값인 SQLite로 설정되어있을 때 사용할 수 있는 유일한 Executor이기도 합니다.

이 Executor는 한 번에 하나의 Task Instance만 실행합니다. 이 때문에 운영 환경에서는 사용하지 않는 편입니다.

![](https://miro.medium.com/max/1400/1*QAioF8YX5xEFb92hHHoFEQ.png)
*출처: https://insaid.medium.com/executors-in-airflow-2357675b8284*
