# 설치하기

<br>

## 실행 환경 소개

다음 환경에서 설치 및 실습을 진행합니다.

- 파이썬 3.8.x
- macOS Big Sur 11.2.3

<br>

## 가상 환경 만들기

Airflow 프로젝트를 위한 디렉토리를 하나 만들고 진입합니다.

```bash
# Airflow를 위한 디렉토리를 하나 생성합니다.
$ mkdir my-airflow-project
$ cd my-airflow-project
```

간단하게 파이썬 기본 가상 환경 모듈 `venv` 로 가상 환경을 만듭니다.

```bash
# 가상 환경을 생성합니다.
$ python -m venv .venv

# 생성 되었는지 확인합니다.
$ ls -al
total 0
drwxr-xr-x  3 heumsi  staff   96  7  7 20:31 .
drwxr-xr-x@ 7 heumsi  staff  224  7  7 20:31 ..
drwxr-xr-x  6 heumsi  staff  192  7  7 20:31 .venv
```

이제 가상 환경에 진입합니다.

```bash
$ source .venv/bin/activate
$ (.venv)  # 
```

가상 환경에 진입하면 셸에 `(.venv)` 와 같은 표시가 생깁니다.  
이후 모든 셸 명령어 실행은 가상 환경에서 진행됩니다. 다만 편의상 `(.venv)` 를 표시하진 않겠습니다.

<br>

## pip 업데이트

패키지 매니저 도구인 `pip` 를 다음처럼 최신 버전으로 업데이트 해줍니다.

```bash
$ pip install pip --upgrade
```

<br>

## Airflow 설치

이제 다음처럼 `pip` 를 통해 `apache-airflow` 를 설치합니다.  

```bash
$ pip install apache-airflow==2.2.3
```

> 저는 현 시점 가장 최신 버전인 `2.2.3` 버전을 받았습니다.  
> Airflow의 최신 버전은 공식 [Github Repo](https://github.com/apache/airflow)에서 확인하실 수 있습니다.

설치가 완료되었습니다!  
이제 본격적으로 Airflow를 사용해봅시다.
