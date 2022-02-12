# 커맨드로 직접 하나씩 배포하기

이 방법은 airflow cli로 airflow 컴포넌트들을 직접 하나씩 배포하는 방법입니다.
가장 단순한 배포 방법이며, 이해하기에도 가장 쉬울거라 생각합니다.

## 프로젝트 세팅

### 프로젝트 경로 생성 및 진입

Airflow 프로젝트를 담을 경로를 다음처럼 생성하고 진입합니다.

```bash
# Airflow 프로젝트를 위한 디렉토리를 하나 생성합니다.
$ mkdir my-airflow-project
$ cd my-airflow-project
```

이후에 진행될 모든 커맨드는 이 프로젝트 경로에서 실행합니다.

### 가상환경 생성 및 진입

간단하게 파이썬 기본 가상 환경 모듈 `venv` 로 가상 환경을 만듭니다.

```bash
# 가상 환경을 생성합니다.
$ python -m venv .venv
```

이제 가상 환경에 진입합니다.

```bash
$ source .venv/bin/activate
$ (.venv)
```

### pip 업데이트

먼저 패키지 매니저 도구인 `pip` 를 다음처럼 최신 버전으로 업데이트 해줍니다.

```bash
$ pip install pip --upgrade
```

이제 다음처럼 `pip` 를 통해 `apache-airflow` 를 설치합니다.

```bash
$ pip install apache-airflow==2.2.3
```

::: tip
저는 현 시점 가장 최신 버전인 `2.2.3` 버전을 받았습니다.
Airflow의 최신 버전은 공식 [Github Repo](https://github.com/apache/airflow)에서 확인하실 수 있습니다.
:::

## Meta Database

### 배포하기

Meta Database로 PostgreSQL를 사용하겠습니다.

:::tip
만약 이미 배포하여 사용 중인 Database가 있다면, 이 작업은 스킵하셔도 좋습니다.
:::

Postgres 컨테이너에 Volume 마운트할 디렉토리를 다음처럼 만들어둡니다.

```bash
$ mkdir data
```

다음 명령어로 Postgres 컨테이너를 실행합니다.

```bash
$ docker run \
  --name airflow-database \
  -d \
  -p 5432:5432 \
  --network airflow \
  -v $(pwd)/data:/var/lib/postgresql/data \
  -e POSTGRES_USER=airflow \
  -e POSTGRES_PASSWORD=1234 \
  postgres:13
```

컨테이너가 제대로 배포되었는지 다음처럼 확인할 수 있습니다.

```bash
$ docker ps

CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS              PORTS                    NAMES
c0b60f349279   postgres:13   "docker-entrypoint.s…"   3 minutes ago   Up About a minute   0.0.0.0:5432->5432/tcp   airflow-database
```

### 초기화 하기

설정을 완료했다면, Airflow에서 Database를 다시 초기화 해야 합니다. 다음 명령어로 초기화합니다.

```bash
$ export AIRFLOW_HOME=.
$ airflow db init
```

### 관리자 계정 생성하기

초기에 사용할 관리자 게정을 생성해야 합니다. `username`은 `admin`, `password`는 `1234`인 계정을 생성해봅시다.
다음 명령어로 생성합니다.

```bash
$ airflow users create \
	--username admin \
	--password 1234 \
    --firstname heumsi \
    --lastname jeon \ㅌㅌㅈㅌㅈ
    --role Admin \
    --email heumsi@naver.com
```

### 연결 설정하기

먼저 Postgres Database와 연결할 수 있는 드라이버 관련 파이썬 패키지를 다음처럼 설치합니다.

```bash
$ pip install psycopg2
```

설치가 완료되면 `airflow.cfg` 에서 `sql_alchemy_conn` 의 값을 다음처럼 postgres를 사용하도록 변경합니다.

```
# as-is (기본값)
# sql_alchemy_conn = sqlite:///./airflow.db

# to-be
sql_alchemy_conn = postgresql+psycopg2://airflow:1234@localhost:5432/airflow
```

:::tip
`sql_alchemy_conn` 의 포맷은 SQLAlchemy에서 Engine 인스턴스를 만들 때 사용하는 URL 포맷입니다. 이에 대한 내용은 [SQLAlchemy 공식 문서](https://docs.sqlalchemy.org/en/14/core/engines.html)에서 확인하실 수 있습니다.

참고로 SQLAlchemy는 파이썬 애플리케이션에서 Database와 연결하기 위해 사용하는 가장 대표적인 라이브러리이며, 수많은 파이썬 오픈소스에서 사용되고 있습니다.
:::

## Webserver

다음 명령어로 Webserver를 배포합니다.

```bash
$ export AIRFLOW_HOME=.
$ airflow webserver --port 8080
```

## Scheduler

다음 명령어로 Scheduler를 배포합니다.

```bash
$ export AIRFLOW_HOME=.
$ export AIRFLOW__CORE__EXECUTOR="LocalExecutor"
$ airflow scheduler
```

:::tip
Scheduler Executor는 기본적으로 Sequential Executor로 설정되어 있지만,
운영 환경에서는 적어도 Local Executor를 사용하기를 공식 문서에서 권장하고 있습니다.

작은 규모라면 Local Executor를, 어느 정도 규모가 있다면 Celery Executor를,
쿠버네티스 위에서 배포한다면 Kubernetes Executor를 사용하기를 권장합니다.
:::

## Code Server

Code Server는 VSCode의 Web Browser 버전입니다.
서버에 직접 접속하여 DAG 파일을 작성하지 않고, 이 Code Server를 이용하여 작성할 수 있도록 해봅시다.

다음처럼 Docker 컨테이너로 배포합니다. 이 때 `dags/` 디렉토리를 마운트합니다.

```bash
$ docker run -it --name code-server \
    --name airflow-code-server \
    -d \
    -v "$(pwd)/dags:/home/coder/project" \
    -p 8888:8888 \
    -e PASSWORD=1234 \
    -e HOST=0.0.0.0 \
    -e PORT=8888 \
    codercom/code-server:4.0.2
```

컨테이너가 제대로 배포되었는지 다음처럼 확인할 수 있습니다.

```bash
$ docker ps

CONTAINER ID   IMAGE                         COMMAND                  CREATED          STATUS          PORTS                    NAMES
88608ae21d39   codercom/code-server:latest   "/usr/bin/entrypoint…"   7 seconds ago   Up 6 seconds   8080/tcp, 0.0.0.0:8888->8888/tcp   airflow-code-server
```

이제 브라우저에서 `http://localhost:8888` 에 접속해봅시다.

![img.png](./img.png)

배포할 때 설정한 비밀번호 `1234` 를 입력합니다. 그러면 아래와 같은 화면이 등장합니다.

![img_2.png](./img_2.png)

왼쪽 Explorer 탭에서 `project` 를 클릭하면, 우리가 마운트한 `dags/` 내 파일이 보입니다.

![img_1.png](./img_1.png)
