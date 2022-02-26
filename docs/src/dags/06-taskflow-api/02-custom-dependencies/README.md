# 커스텀하게 Task간 의존성 작성하기

## Graph View

![img.png](./img.png)

## Code

<<< @/../my-airflow-project/dags/06_taskflow_api/02_custom_dependencies.py

## Web UI & Logs

![img_1.png](./img_1.png)

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

## Keywords

- Taskflow API
- Task Dependencies
