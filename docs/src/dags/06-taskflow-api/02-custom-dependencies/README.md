# 커스텀하게 Task간 의존성 작성하기

Taskflow API를 사용하면 Task 간 의존 관계를 명시적으로 정의해주지 않아도 자동으로 파악하여 설정되었습니다.
이는 직접 정의해줄 필요가 없어서 편리할 수 있는 반면, 의존 관계가 명시적이지 않아 불편할 수도 있습니다.

이번에는 Taskflow API에서도 명시적으로 Task간 의존 관계를 정의하는 방법에 대해 알아봅시다.

## Graph View

다음과 같은 Task 의존성을 갖는 DAG을 작성할 것입니다.

![img.png](./img.png)

## Code

<<< @/../my-airflow-project/dags/06_taskflow_api/02_custom_dependencies.py{40-42,44}

- `40-42` 라인을 보면 `@task` 를 붙인 함수를 호출한 뒤 그 반환 값을 저장합니다.
  - 이 값은 Task Instance가 됩니다.
- `44` 라인에 이 Task Instnace간 의존 관계를 정의합니다.

## Web UI & Logs

DAG을 실행하면 다음과 같은 화면을 얻습니다.

![img_1.png](./img_1.png)

각 Task Instance의 로그를 살펴보면 다음과 같습니다.

### `print_hello`

![img_2.png](./img_2.png)

```
[2022-01-31, 15:43:04 UTC] {logging_mixin.py:109} INFO - hello
```

### `get_first_word_from_param_and_return`

![img_3.png](./img_3.png)

```
[2022-01-31, 15:43:06 UTC] {logging_mixin.py:109} INFO - welcome
```

### `get_last_word_from_param`

![img_4.png](./img_4.png)

```
[2022-01-31, 15:43:51 UTC] {logging_mixin.py:109} INFO - tutorials
```
