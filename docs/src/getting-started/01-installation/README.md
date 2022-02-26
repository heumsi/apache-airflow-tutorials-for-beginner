# 설치하기

## 실행 환경 소개

다음 환경에서 설치 및 실습을 진행합니다.

- 파이썬 3.8.x
- macOS Big Sur 11.2.3

:::tip
파이썬은 [pyenv](https://github.com/pyenv/pyenv)로 쉽게 설치할 수 있습니다.
파이썬 버전이 다르면 이 문서와 조금 다른 결과가 나올 수 있습니다.
:::

## 가상 환경 만들기

Airflow 프로젝트를 위한 디렉토리를 하나 만들고 진입합니다.

```bash
# Airflow 프로젝트를 위한 디렉토리를 생성합니다.
$ mkdir my-airflow-project

# 생성한 디렉토리에 진입합니다.
$ cd my-airflow-project
```

간단하게 파이썬 기본 가상 환경 모듈 `venv` 로 가상 환경을 만들고 진입합니다.

```bash
# 가상 환경을 생성합니다.
$ python -m venv .venv

# 생성한 가상 환경에 진입합니다.
$ source .venv/bin/activate
$ (.venv)  # 가상 환경에 진입하면 셸에 (.venv) 와 같은 표시가 생깁니다. (사용하는 셀 마다 다를 수 있습니다.)
```

이후 모든 셸 명령어 실행은 가상 환경에서 진행됩니다. 다만 편의상 `(.venv)` 를 표시하진 않겠습니다.

## 패키지 설치

먼저 패키지 매니저 도구인 `pip` 를 다음처럼 최신 버전으로 업데이트 해줍니다.

```bash
$ pip install pip --upgrade
```

이제 다음처럼 `pip` 를 통해 `apache-airflow` 패키지를 설치합니다.

```bash
$ pip install apache-airflow==2.2.3
```

::: tip
저는 현 시점 가장 최신 버전인 `2.2.3` 버전을 받았습니다.
Airflow의 최신 버전은 공식 [Github Repo](https://github.com/apache/airflow)에서 확인하실 수 있습니다.
:::

설치가 완료되었습니다! 이제 본격적으로 Airflow를 사용해봅시다.
