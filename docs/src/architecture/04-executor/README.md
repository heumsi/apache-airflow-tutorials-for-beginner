# Executor

Executor는 Scheduler에서 생성하는 서브 프로세스로 Queue에 들어온 Task Instance를 실제로 실행하는 역할을 합니다.

Executor에는 여러 타입이 있는데, 크게 2가지로 나눠볼 수 있습니다.

- Local Executors
  - Task Instance를 Scheduler 프로세스 내부에서 실행합니다.
- Remote Executors
  - Task Instance를 Scheduler 프로세스 외부에서 실행합니다.

각 Executor는 좀 더 세부적으로 다음처럼 나뉩니다.

- Local Executors
  - Local Executor
  - Sequential Executor
- Remote Executors
  - Celery Executor
  - Kubernetes Executor

이제 각 Executor에 대해 좀 더 자세히 알아봅시다.

:::tip
위 Executor 외에도 Debug Executor 등 소개하지 않은 Executor가 있습니다.
이 문서에서는 실제로 주로 쓰이는 Executor들에 대해서만 소개합니다. 여기서 소개하지 않은 Executor에 대한 내용은 [공식 문서](https://airflow.apache.org/docs/apache-airflow/2.2.3/executor/index.html)를 확인하세요.
:::
