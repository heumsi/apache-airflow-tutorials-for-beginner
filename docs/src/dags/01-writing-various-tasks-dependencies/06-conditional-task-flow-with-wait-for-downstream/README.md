# 직전 DAG Run의 상태에 따라 Task 실행 여부를 결정하기

## Graph View

다음처럼 간단한 Task 의존성을 가지는 DAG을 작성해볼 것입니다.

![image-20220123003728946](./image-20220123003728946.png)

간단해 보이지만 하나 다른 점은 **이전 DAG Run의 상태가 성공인 경우에만 현재 DAG Run을 실행**한다는 것입니다.
Grahp View에서는 이러한 내용이 잘 보이지 않으니 Tree View를 살펴보겠습니다.

:::tip
직전 내용과 다른 점은, 직전 내용은 이전 DAG Run의 Task Instance 상태가 주요 요인이었다면, 이번 내용은 **이전 DAG Run 그 자체의 상태**가 주요 요인이라는 것입니다.
즉 실행 단위가 Task Instance가 아닌 DAG Run 입니다.
:::

## Tree View

작성할 DAG을 실행하면 다음과 같은 Tree View를 얻게 됩니다.

![image-20220122225546239](./image-20220122225546239.png)

자세히 살펴보면, 첫 번째 DAG Run이 실패한 상태고, 두 번째 DAG Run의 실행 중 상태이지만, 어떠한 Task Instance도 실행되지 않은 것을 볼 수 있습니다.
두 번째 DAG Run의 모든 Task Instance가 실행되지 않은 이유는 직전 DAG Run이 실패한 상태이기 때문입니다.

## Code

<<< @/../my-airflow-project/dags/01_writing_various_task_flows/06_conditional_tasks_with_wait_for_downstream.py{27-29}


- `PythonOperator`의 `wait_for_downstream` 파라미터 값을 `True`로 넘겨줍니다.
  - `wait_for_downstream` 의 기본 값은 `False` 입니다.
  - `PythonOperator` 뿐 아니라 제공되는 모든 `Operator`에 `depends_on_past`가 존재합니다.

:::tip
`wait_for_downstream=True` 를 다음처럼  `default_args` 에 넣어주면, 모든 Task에 대해 직전 DAG Run의 Task 각각의 상태에 따라 실행할 수 있게 됩니다.

```python
with DAG(
    ...
    default_args={
        ...
        "wait_for_downstream": True
    },
    ...
) as dag:
    ...
```
:::

## Web UI

![image-20220122225611854](./image-20220122225611854.png)
