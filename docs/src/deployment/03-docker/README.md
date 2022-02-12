# Docker로 하나씩 배포하기

이 방법은 Docker로 Airflow 컴포넌트들을 직접 하나씩 배포하는 방법입니다.
최종적으로 Docker 컨테이너를 통해 각 Airflow 컴포넌트들의 독립된 실행 환경을 구성하게 됩니다.

다만 실제로 배포할 때 이 방법보단, 다음 글에서 다룰 Docker-compose로 배포하는 방법을 더 많이 사용하곤 합니다.
여기서는 배포 그 자체보다는, Docker-compose로 배포하는 방법을 다루기 전에,
Docker 컨테이너로 배포하려면 어떤 과정을 거쳐야 하는 지에 대해 중점을 두시면 좋을거 같습니다.

:::tip
도커에 대해 처음 들어보시는 분들은 [subicura 님의 초보를 위한 도커 안내서](https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html) 를 읽어보시길 추천드립니다.
:::

:::tip
배포하기 위해 배포 환경에 Docker가 미리 설치되어 있어야 합니다.
Docker가 설치되어 있지 않다면, 아래 내용을 참고하여 Docker를 설치해주세요.

- [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/)
- [Install Docker Desktop on Mac](https://docs.docker.com/desktop/mac/install/)
- [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
:::

## 프로젝트 세팅

### 프로젝트 경로 생성 및 진입

Airflow 프로젝트를 담을 경로를 다음처럼 생성하고 진입합니다.

```bash
# Airflow 프로젝트를 위한 디렉토리를 하나 생성합니다.
$ mkdir my-airflow-project
$ cd my-airflow-project
```

이후에 진행될 모든 커맨드는 이 프로젝트 경로에서 실행합니다.

## Docker Network 생성

Airflow의 모든 컴포넌트가 Docker 컨테이너로 배포될텐데, 이 컨테이너들간의 통신할 네트워크를 먼저 생성합니다.

다음 명령어로 Docker Network를 생성합니다.

```bash
$ docker network create airflow
```

잘 생성되었는지 다음처럼 확인해볼 수 있습니다.

```bash
$ docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
b8f5eb31452e   airflow   bridge    local
```

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
c0b60f349279   postgres:13   "docker-entrypoint.s…"   3 minutes ago   Up About a minute   5432/tcp   airflow-database
```

### 초기화 하기

다음 명령어로 Meta Database를 초기화합니다.

```bash
$ docker run \
  --name airflow-init \
  --network airflow \
  --entrypoint /bin/bash \
  -e AIRFLOW__CORE__SQL_ALCHEMY_CONN=postgresql+psycopg2://airflow:1234@airflow-database:5432/airflow \
  apache/airflow:2.2.3-python3.8 \
  -c " \
    airflow db init && \
    airflow users create \
      --username admin \
      --password 1234 \
      --firstname heumsi \
      --lastname jeon \
      --role Admin \
      --email heumsi@naver.com \
  "
```

## Scheduler

다음 명령어로 Scheduler를 배포합니다.

```bash
$ docker run \
  --name airflow-scheduler \
  --network airflow \
  -d \
  -e AIRFLOW__CORE__SQL_ALCHEMY_CONN=postgresql+psycopg2://airflow:1234@airflow-database:5432/airflow \
  -e AIRFLOW__CORE__EXECUTOR=LocalExecutor \
  apache/airflow:2.2.3-python3.8 \
  airflow scheduler
```

컨테이너가 제대로 배포되었는지 다음처럼 확인할 수 있습니다.

```bash
$ docker ps

CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS          PORTS      NAMES
f2ac94182d39   apache/airflow:2.2.3-python3.8   "/usr/bin/dumb-init …"   45 seconds ago   Up 44 seconds   8080/tcp   airflow-scheduler
...
```

:::tip
Scheduler Executor는 기본적으로 Sequential Executor로 설정되어 있지만,
운영 환경에서는 적어도 Local Executor를 사용하기를 공식 문서에서 권장하고 있습니다.

작은 규모라면 Local Executor를, 어느 정도 규모가 있다면 Celery Executor를,
쿠버네티스 위에서 배포한다면 Kubernetes Executor를 사용하기를 권장합니다.
:::

## Webserver

다음 명령어로 Webserver를 배포합니다.

```bash
$ docker run \
  --name airflow-webserver \
  --network airflow \
  -d \
  -p 8080:8080 \
  -e AIRFLOW__CORE__SQL_ALCHEMY_CONN=postgresql+psycopg2://airflow:1234@airflow-database:5432/airflow \
  apache/airflow:2.2.3-python3.8 \
  airflow webserver
```

```bash
$ docker ps

CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS          PORTS      NAMES
e8dd306789f6   apache/airflow:2.2.3-python3.8   "/usr/bin/dumb-init …"   45 seconds ago   Up 41 seconds   0.0.0.0:8080->8080/tcp   airflow-webserver...
...
```

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

## 정리

배포한 모든 컨테이너를 확인해보면 다음과 같습니다.

```bash
$ docker ps

CONTAINER ID   IMAGE                            COMMAND                  CREATED              STATUS              PORTS                              NAMES
e8dd306789f6   apache/airflow:2.2.3-python3.8   "/usr/bin/dumb-init …"   About a minute ago   Up About a minute   0.0.0.0:8080->8080/tcp             airflow-webserver
bb7e13d1f4c5   apache/airflow:2.2.3-python3.8   "/usr/bin/dumb-init …"   4 minutes ago        Up 4 minutes        8080/tcp                           airflow-scheduler
42736f3bf287   postgres:13                      "docker-entrypoint.s…"   5 minutes ago        Up 5 minutes        5432/tcp                           airflow-database
88608ae21d39   codercom/code-server:latest      "/usr/bin/entrypoint…"   7 seconds ago        Up 6 seconds        8080/tcp, 0.0.0.0:8888->8888/tcp   airflow-code-server
```
