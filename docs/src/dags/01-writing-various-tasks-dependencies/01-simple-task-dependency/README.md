# 간단한 Task 의존성 작성하기

## Graph View

다음과 같은 간단한 Task 의존성을 가지는 DAG을 작성해봅시다.

![image-20220122121951658](./image-20220122121951658.png)

## Code

<<< @/../my-airflow-project/dags/01_writing_various_task_flows/01_simple_tasks.py{28}

- `>>` 연결로 순차적인 Task 의존성을 만듭니다. 아주 간단합니다.

## Web UI

![image-20220122122006564](./image-20220122122006564.png)
