# Operator와 함께 사용하기

## Graph View

![img.png](./img.png)

## Code

<<< @/../examples/dags/06_taskflow_api/03_with_operators.py

## Web UI & Logs

![img_1.png](./img_1.png)

### `get_first_word_from_param_and_return`

![img_2.png](./img_2.png)

```
[2022-01-31, 15:52:14 UTC] {logging_mixin.py:109} INFO - welcome
```

### `get_last_word_from_param_and_return`

![img_3.png](./img_3.png)

```
[2022-01-31, 15:57:04 UTC] {logging_mixin.py:109} INFO - tutorials
```

### `print_param`

![img_4.png](./img_4.png)

```
[2022-01-31, 15:57:07 UTC] {logging_mixin.py:109} INFO - welcome to airflow tutorials
```

## Keywords

- Taskflow API
- Operators
