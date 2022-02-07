# Local Executor

Local Executor는 Task Instance를 병렬적으로(Parallel) 여러 개 실행할 수 있습니다.
각 Task Instance는 별도의 프로세스에서 실행되는데 이렇게 Task Instance를 실행하는 프로세스를 워커라고 부릅니다.
한편, `$AIRFLOW_HOME/airflow.cfg` 설정 파일에서 `parallelism` 설정 값에 따라 Local Executor의 동작 과정이 조금 달라집니다.

`parallelism` 의 값이 0인 경우, Unlimited Parallelism 이라고 부르며, 한 번에 실행할 수 있는 Task Instance의 개수에 제한이 없습니다.
즉 `QUEUED` 상태인 모든 Task Instance가 각각의 프로세스로 생성되어 실행되며 실행외 완료돠면 프로세스도 종료됩니다.

`parallelism` 의 값이 0이 아닌 경우, Limited Parallelism 이라고 부르며, Local Executor 실행 초기에 `parallelism` 개수 만큼의 워커 프로세스를 미리 만들어둡니다.
이후 `QUEUED` 상태인 Task Instance들은 이 워커 프로세스들 내에서 실행됩니다.

`parallelism` 의 기본 설정 값은 32로 되어있습니다. (즉, Airflow에서 별도의 설정을 하지 않고 Local Executor를 사용하면 Local Executor는 Limited Parallelism의 형태로 동작합니다.)

![](https://miro.medium.com/max/1400/1*juMYCvszj1lcycoEOvGVAw.png)
*출처: https://insaid.medium.com/executors-in-airflow-2357675b8284*
