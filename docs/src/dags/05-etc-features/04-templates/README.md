# Templates - 동적으로 변수를 넘기는 또다른 방법

Airflow에서는 템플릿 문법을 통해 Airflow에서 제공하는 기본 템플릿 변수를 사용하거나 이를 조작할 수 있습니다.

템플릿 문법을 활용하는 여러 예시를 살펴봅시다. 예시가 좀 길어서 Overview부터 시작하여 하나씩 살펴보겠습니다.

## Overview

### Grpah View

다음과 같은 Task들을 가지는 DAG을 작성할 것입니다.

![img.png](./img.png)

Task 간 의존성은 없습니다. 각 Task 별로 어떻게 템플릿 문법을 활용하는지 하나씩 살펴보겠습니다.

### Code

전체 코드는 다음과 같습니다.

<<< @/../my-airflow-project/dags/05_etc_features/04_templates.py

`task_1` 부터 `task_5` 까지 각 Task를 하나씩 살펴봅시다.

## Pre Defined Variables

템플릿 변수로 Airflow에서 기본적으로 제공해주는 변수들을 사용할 수 있습니다.

### Code

<<< @/../my-airflow-project/dags/05_etc_features/04_templates.py{31-38}

- `dag_run`, `data_interval_start`, `data_interval_end` 모두 Airflow가 제공해주는 기본 템플릿 변수입니다.
  - `dag_run` 은 DAG Run에 대한 정보를 담은 인스턴스입니다.
    - `logical_date` 은 Task Instance가 (스케줄링으로) 실행되는 시간입니다.
    - `logical_date` 은 2.2.0 이전 버전에서는 `execution_date` 로 불렸습니다.
  - `data_interval_start` 은 작업의 스케줄 간격의 시작 시간입니다.
  - `data_interval_end` 는 작업의 스케줄 간격의 종료 시간입니다.

:::tip
실행 시간, 스케줄 간격 시작, 종료 시간의 개념이 충분히 헷갈릴 수 있습니다. 헷갈리시는 분은 [이 글](https://blog.bsk.im/2021/03/21/apache-airflow-aip-39/)을 읽어보시길 추천드립니다.
:::

### Log

이 Task Instance의 실행 로그입니다.

![img_1.png](./img_1.png)

각 템플릿 변수 값이 다음처럼 출력된 것을 볼 수 있습니다.

- `dag_run.logical_date`
- `data_interval_start`
- `data_interval_end`

```
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 2022-01-29 15:00:00+00:00
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 2022-01-29T15:00:00+00:00
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 2022-01-30T15:00:00+00:00
```

:::tip
Airflow에 미리 정의된 모든 변수는 [공식 문서](https://airflow.apache.org/docs/apache-airflow/stable/templates-ref.html#variables)에서 확인하실 수 있습니다.
:::

## Pre Defined Filters

템플릿 변수와 더불어 Airflow에서 기본적으로 제공해주는 Filter들을 다음처럼 사용할 수 있습니다.

### Code

<<< @/../my-airflow-project/dags/05_etc_features/04_templates.py{40-47}

- 템플릿 변수 뒤에 파이프 `|` 와 함께 Filter를 적용합니다.
  - `ds` 는 시간(datetime)에서 날짜만을 추출합니다.
  - `ds_nodash`는 `ds` 와 동일하게 날짜만을 추출한 뒤 `-` 를 삭제합니다.
  - `ts` 는 시간(datetime)을 `2018-01-01T00:00:00+00:00`와 같은 형태로 변환합니다.

### Log

이 Task Instance의 실행 로그입니다.

![img_2.png](./img_2.png)

각 템플릿 변수 값이 다음처럼 출력된 것을 볼 수 있습니다.

- `dag_run.logical_date | ds`
- `data_interval_start | ds_nodash`
- `data_interval_end | ts`

```
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 2022-01-29
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 20220129
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 2022-01-30T15:00:00+00:00
```

:::tip
Airflow에 미리 정의된 모든 Filter는 [공식 문서](https://airflow.apache.org/docs/apache-airflow/stable/templates-ref.html#filters)에서 확인하실 수 있습니다.
:::

## Macros

[macros](https://github.com/apache/airflow/tree/main/airflow/macros) 패키지 내에서 정의한 함수들은 다음처럼 템플릿 문법에서 가져다 사용할 수 있습니다.

### Code

<<< @/../my-airflow-project/dags/05_etc_features/04_templates.py{49-55}

- `datetime`과 `ds_add` 은 macro 패키지 내에 기본적으로 포함되어 있습니다.
  - `datetime.now()` 는 실행 시간 기준 시간(datetime)을 반환합니다.
  - `ds_add(ds: str, days: int)` 는 `YYYY-MM-DD` 형태로 된 문자열 `ds` 에 `days` 값 만큼 일수를 더한 문자열을 반환합니다.

### Log

이 Task Instance의 실행 로그입니다.

![img_3.png](./img_3.png)

각 템플릿 변수 값이 다음처럼 출력된 것을 볼 수 있습니다.

- `macros.datetime.now()`
- `macros.ds_add(dag_run.logical_date | ds , 5)`

```
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 2022-01-31 13:35:38.356344
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - 2022-02-03
```

:::tip
Airflow에 미리 정의된 모든 Macro는 [공식 문서](https://airflow.apache.org/docs/apache-airflow/stable/templates-ref.html#macros)에서 확인하실 수 있습니다.
:::

## User Defined Macros

다음처럼 작성자가 직접 Macro를 정의할 수 있습니다.

### Code

<<< @/../my-airflow-project/dags/05_etc_features/04_templates.py{8-9,27,57-63}

- `8-9` 번 라인에 Macro로 사용할 함수 혹은 변수를 정의합니다.
- `27` 번 라인에 `Dict` 로 Macro로 사용할 함수 혹은 변수를 매핑합니다.
  - `Dict` 의 Key가 Macro에서 사용할 값이고, Value가 실제로 사용할 변수나 함수가 됩니다.
- `60-61` 번 라인에 직접 정의한 Macro를 사용합니다.

### Log

이 Task Instance의 실행 로그입니다.

![img_4.png](./img_4.png)

각 템플릿 변수 값이 다음처럼 출력된 것을 볼 수 있습니다.

- `author`
- `create_message()`

```
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - heumsi
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - hello airflow
```

## User Defined Filters

다음처럼 작성자가 직접 Filter를 정의할 수 있습니다.

### Code

<<< @/../my-airflow-project/dags/05_etc_features/04_templates.py{12-13,28,65-70}

- `12-13` 번 라인에 Filter로 사용할 함수를 정의합니다.
- `28` 번 라인에 `Dict` 로 Filter로 사용할 함수를 매핑합니다.
  - `Dict` 의 Key가 Macro에서 사용할 값이고, Value가 실제로 사용할 함수가 됩니다.
- `65-70` 번 라인에 직접 정의한 Filter를 사용합니다.

### Log

이 Task Instance의 실행 로그입니다.

![img_5.png](./img_5.png)

템플릿 변수 값이 다음처럼 출력된 것을 볼 수 있습니다.

- `'welcome airflow' | get_first_element`

```
[2022-01-31, 13:35:38 UTC] {subprocess.py:89} INFO - welcome
```

:::tip
일반적으로 Operator에 Template 변수를 넘기는 방법은 [Custom Operator](/dags/04-using-various-operators/07-custom-operator/#code) 페이지를 참고하세요.
:::
