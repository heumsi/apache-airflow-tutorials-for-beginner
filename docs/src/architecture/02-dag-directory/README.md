# DAG Directory

## 개념

DAG 파일을 저장하는 공간입니다. `dag_folder` 혹은 `dags_folder` 로도 불립니다.
기본적으로 `$AIRFLOW_HOME/dags/` 가 DAG Directory로 설정되어 있습니다.

DAG을 작성한 후 DAG Directory에 저장하면, Airflow Scheduler가 주기적으로 DAG Directory를 스캔한후 DAG을 파싱해갑니다.
이 때 DAG 인스턴스만 파싱해가므로, 사실 DAG 그 자체가 아니라, DAG을 구성에 사용할 다른 코드들(Custom Operator나 기타 Python Code들)을 이 안에 넣어도 무방합니다.

또한 다음처럼 DAG Directory 내부가 여러 디렉터리로 구성되어 있어도 Airflow Scheduler는 모든 디렉토리 내부를 탐색하며 파일을 스캔합니다.

```
# $AIRFLOW_HOME/dags/

project_a/
  a_1.py
  a_2.py
project_b/
  b_1.py
  b_2.py
```

DAG의 개수가 많아지면 DAG Directory 내부를 어떻게 구조화 할지에 대해서 잘 생각해봐야 합니다.

## 설정

`$AIRFLOW_HOME/airflow.cfg` 파일에 다음과 같은 설정들을 지정해볼 수 있습니다.

### `dags_folder`

```
[core]
dags_folder = ./dags
```

`$AIRFLOW_HOME` 기준 `./dags` 경로를 DAG Directory로 설정합니다.

## `.airflowignore`

`.airflowignore` 는 DAG Directory 내부에 Airflow Scheduler가 스캔하지 않고 무시해야할 파일 목록을 담는 파일입니다.

예를 들어 DAG Directory 내부에 다음과 같이 `.airflowignore` 를 정의했다고 해봅시다.

```
# $AIRFLOW_HOME/dags/.airflowignore

a.py
b/
```

이 경우 Airflow Scheduler는 DAG Directory 내 `a.py`와 `b` 디렉토리 내 모든 파일을 스캔하지 않고 넘어갑니다.
이처럼 `.airflowignore` 는 스캔하지 않아야할 파일이나 디렉토리가 있을 경우 유용하게 사용할 수 있습니다.
