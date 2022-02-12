# Docker Compose로 한 번에 배포하기

이 방법은 Docker Compose로 Airflow 컴포넌트들을 한 번에 배포하는 방법입니다.
Docker로 컨테이너를 하나씩 배포하는 것보다 훨씬 편리합니다.
최종적으로 Docker 컨테이너를 통해 각 Airflow 컴포넌트들의 독립된 실행 환경을 구성하게 됩니다.

:::tip
Docker Compose에 대해 처음 들어보시는 분이라면 [[Docker] docker compose 사용법](https://engineer-mole.tistory.com/221)를 읽어보시길 추천드립니다.
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

## `docker-compose.yml` 작성

다음처럼 `docker-compose.yml`을 작성합니다.

<<< @/../examples/docker-compose.yml

`docker-compose.yml` 내용을 각 컴포넌트 별로 살펴보면 다음과 같습니다.

### Docker Network

컨테이너간 사용할 네트워크를 구성합니다.

<<< @/../examples/docker-compose.yml{2-4}

### Meta Database

Meta Database를 배포합니다. 초기화하는 부분도 포함합니다.

<<< @/../examples/docker-compose.yml{5-38}

### Scheduler

Scheduler를 배포합니다.

<<< @/../examples/docker-compose.yml{39-50}

### Webserver

Webserver를 배포합니다.

<<< @/../examples/docker-compose.yml{51-64}

## 배포

다음 명령어로 `docker-compose.yml` 를 실행합니다.

```bash
$ docker-compose up
```

컨테이너가 제대로 배포되었는지 다음처럼 확인할 수 있습니다.

```bash
$ docker-compose ps

      Name                     Command               State            Ports
------------------------------------------------------------------------------------
airflow-database    docker-entrypoint.sh postgres    Up       5432/tcp
airflow-init        /bin/bash -c  \                  Exit 0
                      airflow  ...
airflow-scheduler   /usr/bin/dumb-init -- /ent ...   Up       8080/tcp
airflow-webserver   /usr/bin/dumb-init -- /ent ...   Up       0.0.0.0:8080->8080/tcp
```
