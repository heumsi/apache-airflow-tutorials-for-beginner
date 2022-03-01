# Connections와 Hooks - 외부 시스템과 연결 및 작업하기

Connections와 Hooks는 Postgres, Slack, Hive 등 외부 시스템과의 연동을 위해 Airflow에서 제공하는 인터페이스입니다.
예를 들어 DAG에서 외부의 Postgres와 통신해야할 때, Postgres와 관련된 Connection을 설정하고 DAG 코드에서는 Hook을 사용하면 됩니다.

이 예시를 직접 실습하며 Connections와 Hook에 대해 알아봅시다.

## 사전 준비

실습을 위해 먼저 Airflow가 설치된 가상 환경에 `apache-airflow-providers-postgres` 패키지를 설치합니다.

```bash
$ pip install apache-airflow-providers-postgres
```

설치 이후에는 웹서버 껐다가 다시 켜주세요.

```bash
$ airflow webserver
```

## Web UI

웹 UI에서 상단 메뉴의 Admin - Connections 페이지에 진입합니다.

![img.png](./img.png)

기본적으로 Airflow가 제공하는 Connections 목록이 보입니다.

좌측 상단의 + 버튼을 클릭합니다.

![img_1.png](./img_1.png)

위와 같은 입력 폼이 등장했습니다. 여기서는 현재 Airflow가 사용 중인 Meta Database에 대한 Connection을 만들어보겠습니다.

우리는 이전에 `airflow.cfg` 에서 Meta Database 설정으로 다음과 같은 값을 설정해주었습니다.

```
sql_alchemy_conn = postgresql+psycopg2://airflow:1234@localhost:5432/airflow
```

이 정보를 바탕으로 Connection 입력 폼에 입력하면 다음처럼 됩니다.

![img_2.png](./img_2.png)

Save 버튼을 클릭합니다.

![img_3.png](./img_3.png)

Connection 생성을 완료했습니다.

:::tip
Connection은 위처럼 웹 UI에서 만들 수도 있지만, CLI나 환경 변수로도 만들 수 있습니다.
이에 대한 자세한 내용은 아래 공식 문서를 확인해주세요.

- [Connections를 환경 변수로 정의하는 법](https://airflow.apache.org/docs/apache-airflow/stable/howto/connection.html#storing-a-connection-in-environment-variables)
- [Connections를 CLI로 정의하는 법](https://airflow.apache.org/docs/apache-airflow/stable/howto/connection.html#creating-a-connection-from-the-cli)
:::

## Graph View

다음과 같이 Connection과 Hook을 활용한 Task 의존성을 가지는 DAG을 작성해볼 것 입니다.

![img_4.png](./img_4.png)

## Code

<<< @/../my-airflow-project/dags/05_etc_features/03_connections_and_hooks.py{5,20,22-25,27-30}

- `20` 번 라인에서 `PostgresHook` 으로 Hook을 정의합니다.
  - `postgres_conn_id` 파라미터로 Hook에서 사용할 Connection 정보를 넘겨줍니다.
- `22, 28` 번 라인에서 `PostgresHook` 에서 제공하는 메서드를 사용하고 있습니다.
  - `test_connection` 메서드는 연결 성공 여부와 메시지를 반환합니다.
  - `get_records` 메서드는 쿼리를 실행하여 결과 데이터(Record)를 반환합니다.

:::tip
Hook이 구체적으로 어떤 Hook(PostgresHook, MysqlHook 등)이냐에 따라 제공하는 메서드들이 다 다릅니다.
따라서 특정 Hook을 사용할 때는 공식 문서에서 찾아보시면 어떤 메서드를 지원하는지 먼저 살펴보면 좋습니다.
:::

:::tip
Connection과 Hook은 외부 시스템이 무엇이냐에 따라 결정되기 때문에 Airflow 자체에 내장되어 있지 않고 별도의 Provider를 통해 제공됩니다.
즉 위에서 `apache-airflow-providers-postgres` 패키지를 설치한 것 처럼, Airflow에서 내가 사용하려고 하는 외부 시스템에 대한 Providers를 지원하는지 먼저 확인한 후
이에 해당하는 패키지를 별도로 설치해야 합니다.

Airflow에서 지원하는 Providers 목록은 [공식 문서](https://airflow.apache.org/docs/#providers-packages-docs-apache-airflow-providers-index-html)에서 확인할 수 있습니다.
:::

## Log

`test_connection` Task Instance의 실행 로그는 다음과 같습니다.

![img_5.png](./img_5.png)

`get_variables` Task Instance의 실행 로그는 다음과 같습니다.

![img_6.png](./img_6.png)
