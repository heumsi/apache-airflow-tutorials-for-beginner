# Examples

Apache Airflow tutorials for beginner 문서에서 사용한 예제를 담은 프로젝트입니다.

## Installation

```bash
# 파이썬 버전을 확인합니다.
$ python -V
Python 3.8.12

# 가상환경을 준비합니다.
$ python -m venv .venv
$ source .venv/bin/activate

# 의존성 패키지를 설치합니다.
$ pip install -r requirements.txt
```

## Process

Docker가 실행된 환경이어야 합니다.

```bash
# 다음 커맨드를 순서대로 입력합니다.

# Meta Database를 실행합니다. (Docker Container)
$ make scheduler

# Meta Database를 초기화 합니다.
$ make init-db

# Scheduler를 실행합니다.
$ make scheduler

# Webserver를 실행합니다.
$ make webserver
```

## Commands

```bash
$ make

usage: make [command]

command:
format                         코드를 포매팅합니다.
scheduler                      Airflow Scheduler를 실행합니다.
webserver                      Airflow Webserver를 실행합니다.
init-db                        Airflow Database를 초기화합니다.
run-db                         Airflow Database를 실행합니다.
help                           사용 가능한 커멘드를 확인합니다
```

## Development

```bash
# pre-commit을 설정합니다.
$ pre-commit install
$
```
