# Connections와 Hooks - 외부 시스템과 연결 및 작업하기

## 사전 준비

```bash
$ pip install apache-airflow-providers-postgres
```

웹서버 껐다가 다시 켜기

## Web UI

![img.png](./img.png)

![img_1.png](./img_1.png)

```
sql_alchemy_conn = postgresql+psycopg2://airflow:1234@localhost:5432/airflow
```

![img_2.png](./img_2.png)

![img_3.png](./img_3.png)

## Graph View

![img_4.png](./img_4.png)

## Code

<<< @/../my-airflow-project/dags/05_etc_features/03_connections_and_hooks.py

## Log

![img_5.png](./img_5.png)

![img_6.png](./img_6.png)
