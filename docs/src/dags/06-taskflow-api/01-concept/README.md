# 개념

`PythonOperator` 및 를 더 쉽게 사용하기 위한 추상화된 API

## Graph View

![img.png](./img.png)

## Code

<<< @/../examples/dags/06_taskflow_api/01_concept.py

만약 이를 Operator 형태로 작성했다면 다음과 같습니다.

<<< @/../examples/dags/06_taskflow_api/01_concept_pyoperator_version.py

## Web UI & Logs

![img_1.png](./img_1.png)

### `print_hello`

![img_2.png](./img_2.png)

```
[2022-01-31, 16:05:11 UTC] {logging_mixin.py:109} INFO - hello
```

### `get_first_word_from_param_and_return`

![img_3.png](./img_3.png)

```
[2022-01-31, 16:05:11 UTC] {logging_mixin.py:109} INFO - welcome
```

### `get_last_word_from_param`

![img_4.png](./img_4.png)

```
[2022-01-31, 16:05:13 UTC] {logging_mixin.py:109} INFO - tutorials
```

### `print_kwargs`

![img_5.png](./img_5.png)

```
[2022-01-31, 16:05:11 UTC] {logging_mixin.py:109} INFO - {
    'conf': <airflow.configuration.AirflowConfigParser object at 0x109523eb0>,
    'dag': <DAG: 01_concept>,
    'dag_run': <DagRun 01_concept @ 2022-01-19 15:00:00+00:00: scheduled__2022-01-19T15:00:00+00:00, externally triggered: False>,
    'data_interval_end': DateTime(2022, 1, 19, 15, 0, 0, tzinfo=Timezone('UTC')),
    'data_interval_start': DateTime(2022, 1, 19, 15, 0, 0, tzinfo=Timezone('UTC')),
    'ds': '2022-01-19',
    'ds_nodash': '20220119',
    'execution_date': DateTime(2022, 1, 19, 15, 0, 0, tzinfo=Timezone('UTC')),
    'inlets': [],
    'logical_date': DateTime(2022, 1, 19, 15, 0, 0, tzinfo=Timezone('UTC')),
    'macros': <module 'airflow.macros' from '/Users/hardy/Desktop/dev-heumsi/apache-airflow-tutorials-for-beginner/examples/.venv/lib/python3.8/site-packages/airflow/macros/__init__.py'>,
    'next_ds': None,
    'next_ds_nodash': None,
    'next_execution_date': None,
    'outlets': [],
    'params': {},
    'prev_data_interval_start_success': None,
    'prev_data_interval_end_success': None,
    'prev_ds': None,
    'prev_ds_nodash': None,
    'prev_execution_date': None,
    'prev_execution_date_success': None,
    'prev_start_date_success': None,
    'run_id': 'scheduled__2022-01-19T15:00:00+00:00',
    'task': <Task(_PythonDecoratedOperator): print_kwargs>,
    'task_instance': <TaskInstance: 01_concept.print_kwargs scheduled__2022-01-19T15:00:00+00:00 [running]>,
    'task_instance_key_str': '01_concept__print_kwargs__20220119',
    'test_mode': False,
    'ti': <TaskInstance: 01_concept.print_kwargs scheduled__2022-01-19T15:00:00+00:00 [running]>,
    'tomorrow_ds': '2022-01-20',
    'tomorrow_ds_nodash': '20220120',
    'ts': '2022-01-19T15:00:00+00:00',
    'ts_nodash': '20220119T150000',
    'ts_nodash_with_tz': '20220119T150000+0000',
    'var': {'json': None, 'value': None},
    'conn': None,
    'yesterday_ds': '2022-01-18',
    'yesterday_ds_nodash': '20220118',
    'templates_dict': None
}
```

## Keywords

- Taskflow API
