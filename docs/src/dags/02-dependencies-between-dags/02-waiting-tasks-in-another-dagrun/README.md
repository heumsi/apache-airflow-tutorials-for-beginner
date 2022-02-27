# DAG에서 다른 DAG Run의 Task를 기다리기

## 사전 준비

직전 파트에서 만든 `01_trigger_dagrun` DAG이 있어야 합니다. 이에 대한 내용은 직전 파트에서 확인해주세요.

`01_trigger_dagrun`이 이미 있고, DAG Run이 이미 만들어진 상황이라면 Web UI에서 `01_trigger_dagrun`을 삭제해주세요.
시간이 조금 지나면 `01_trigger_dagrun` 은 OFF된 상태로 다시 Web UI에 등장할 것입니다.

위 준비를 모두 마치면 Web UI는 다음과 같이 `01_trigger_dagrun` 는 OFF 상태고, DAG Run 기록이 없는 상태여야 합니다.
그리고 `00_to_be_triggered_by_other_dags` 는 ON 상태여야 합니다.

![img.png](./img.png)

## Graph View

다음과 같은 간단한 Task 의존성을 가지는 DAG을 작성해봅시다.

![img_6.png](./img_6.png)

이 때 `wait_for_01_trigger_dagrun.task_3` 는 `01_trigger_dagrun` DAG Run의 `task_3` Task Instance가 성공 상태가 되기까지 기다린 후 실행됩니다.
즉, `01_trigger_dagrun` DAG 내 Task Instance가 실행이 완료되기까지 기다리게 됩니다.

## Code

<<< @/../my-airflow-project/dags/02_dependencies_between_dags/02_waiting_tasks_in_another_dagrun.py{6,26-35}

- `ExternalTaskSensor` 를 통해 다른 DAG Run 내 Task Instance가 완료되기까지 기다리는 Task Instnace를 작성합니다.
  - `external_dag_id` 파라미터에 다른 DAG의 `dag_id` 를 넘깁니다.
  - `external_task_id` 파라미터에 `external_dag_id`로 지정한 DAG 내 기다릴 Task의 `task_id`를 넘깁니다.
  - `allowed_states` 파라미터에 기다릴 Task Instance의 기대하는 상태를 넘깁니다.
  - 나머지는 모두 기본 값 그대로 적었습니다. 자세한 내용은 [공식 문서](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/sensors/external_task/index.html?highlight=externaltasksensor#airflow.sensors.external_task.ExternalTaskSensor)를 확인해주세요.

## Web UI

작성한 DAG Run이 실행되면 다음처럼 `ExternalTaskSensor` 로 작성한 Task Instance에서 실행 중인 상태로 다른 DAG Run이 성공 상태로 되기까지 기다립니다.

![img_2.png](./img_2.png)

이제 기다리고 있는 다른 DAG인 `01_trigger_dagrun` DAG을 ON 상태로 두어 실행해봅시다.

![img_3.png](./img_3.png)

![img_4.png](./img_4.png)

위처럼 `01_trigger_dagrun` DAG Run 이 실행 되고 성공한 상태가 되면, 다음처럼 기존의 `waiting_tasks_in_another_dagrun` DAG Run에서 기다림이 끝나고,
그 다음 Task들을 정상적으로 실행해나갑니다.

![img_5.png](./img_5.png)
