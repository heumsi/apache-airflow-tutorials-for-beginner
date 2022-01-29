# XComs - 테스크 간 데이터 주고받기

Airflow의 DAG 내에서 각각 Task들의 실행은 격리되어 있습니다.
따라서 기본적으로 Task 간 메모리를 공유하고 있지 않으며, 데이터를 주고 받으려면 별도의 동작이 필요합니다.

XCom는 Cross Communications의 줄임말로 이렇게 Task 간 데이터를 주고 받고싶을 때 사용합니다.

:::warning
XCom의 저장 범위는 DAG Run 내에서만 유효합니다.
서로 다른 DAG Run에서는 XComs를 통한 데이터 주고 받기가 불가능합니다.
:::

## Grpah View

![img_1.png](./img_1.png)

## Code

<<< @/../examples/dags/05_etc_features/01_xcoms.py

:::tip
`PythtonOperator`의 경우 반환 값이 XCom로 푸시됩니다.
`BashOperator`의 경우 stdout의 가장 마지막 줄만 XCom으로 푸시됩니다.
(이 기능을 끄고 싶다면 `BashOperator`의 생성자 파라미터 중 `do_xcom_push=False`로 지정하면 됩니다.)

두 경우 모두 XCom의 Key는 `return_value` 로 자동 지정됩니다.
:::

## Web UI

![img_2.png](./img_2.png)

![img.png](./img.png)

![img_3.png](./img_3.png)

![img_4.png](./img_4.png)

:::warning
XCom는 Task 간의 간단한 데이터를 주고 받기 위한 용도이며, 대용량 파일이나 데이터를 주고받기에는 적절치 않습니다.
XCom은 Database에 저장되는데, XCom으로 주고받을 수 있는 데이터 사이즈 한계는 Database에 따라 다음과 같습니다.

- SQLite: 2 Go
- Postgres: 1 Go
- MySQL: 64 KB
:::

## 더 읽어보면 좋을 글

- [What is an Airflow XCom?](https://marclamberti.com/blog/airflow-xcom/)

## Keywords

- XComs
