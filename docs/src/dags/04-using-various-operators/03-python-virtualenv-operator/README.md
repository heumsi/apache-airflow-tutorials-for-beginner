# PythonVirtualenvOperator

`PythonVirtualenvOperator` 는 `virtualenv` 로 가상환경 진입 및 패키지 설치 후 파이썬 Callable 객체(여기엔 함수도 포함됩니다)를 실행하는 Operator입니다.
`virtualenv` 로 격리된 공간에서 필요한 패키지를 설치할 수 있다는 점 외에는 `PythonOperator`와 사용법과 동작은 동일합니다.

## Graph View

다음처럼 간단한 Task 의존성을 가지는 DAG을 작성해봅시다.

![img.png](./img.png)

## Code

<<< @/../my-airflow-project/dags/04_using_various_operators/03_python_virtualenv_operator.py{4,32-38,40-47}

- `PythonVirtualenvOperator`로 가상환경을 만든 뒤 패키지를 설치하고 파이썬 Callable 객체를 실행합니다.
  - `python_callable` 파라미터에 실행할 파이썬 Callable 객체를 넘깁니다.
  - `requirements` 파라미터에 가상환경에 설치할 파이썬 패키지 목록을 `List[str]` 타입으로 넘깁니다.
  - `python_version` 파라미터로 가상환경에 사용할 파이썬 버전을 지정할 수도 있습니다.

## Web UI

다음처럼 잘 실행된 것을 로그를 통해 확인할 수 있습니다.

![img_1.png](./img_1.png)

![img_2.png](./img_2.png)

![img_3.png](./img_3.png)
