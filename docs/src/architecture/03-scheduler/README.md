# Scheduler

## 개념

Scheduler는 DAG 파일을 파싱하고, 모든 Task와 DAG들을 모니터링하며, Task Instance와 Dag Run들의 스케줄링 및 오케스트레이션을 담당합니다.
이 외에도 많은 기능을하며, Airflow에서 가장 중요한 컴포넌트라고 할 수 있습니다.

Scheduler는 다음과 같은 일들을 합니다.

- Dag Directory에서 파일을 처리하고 결과를 얻는 일
- DAG Run과 Task Instance의 상태를 변경하고 Executor가 실행시킬 큐에 Task를 넣는 일
- Executor로 스케줄링 큐에 들어온 Task를 실행시키는 일

여기서 앞에 두 할 일에 대해 좀 더 알아봅시다. (Executor에 대한 내용은 별도로 설명합니다.)

### Dag Directory에서 파일을 처리하는 일

Scheduler는 Dag Directory에서 DAG 파일을 모두 읽고 이를 실행한 후, 오류 및 DAG을 Serialized해서 Database에 저장합니다.
이를 위해 Scheduler는 `DagFileProcessorManager`라는 서브 프로세스를 만들고, `DagFileProcessorAgent` 객체를 통해 이 프로세스와 통신합니다.
그리고 `DagFileProcessorManager`는 `DagFileProcessorProcess` 라는 서브 프로세스를 만드는데, 이 프로세스에서 구체적으로 DAG을 실행하고 결과를 저장합니다.

`DagFileProcessorManager`와 `DagFileProcessorProcess` 프로세스에 대해 좀 더 알아보겠습니다.

![](https://airflow.apache.org/docs/apache-airflow/stable/_images/dag_file_processing_diagram.png)

#### DagFileProcessorManager

- Scheduler에 의해 생성되는 **프로세스**입니다.
- 주기적으로 DAG Directory에 있는 모든 파일의 경로(`file_path`)를 변수에(`file_paths`)에 저장합니다.
  - 이 주기는 `dag_dir_list_interval` 설정 값으로 정해지며, 기본 값은 300초입니다.
  - 이 주기를 넘지 않은 채 호출되었다면 이 작업은 스킵합니다.
  - 이 작업으로 인해 DAG Direoctry 내 추가되거나 삭제되는 파일을 Scheduler가 인지할 수 있습니다.
- 주기적으로 위에서 수집한 파일 경로 리스트(`file_paths`)에서 처리해야할 파일 경로들만 별도의 큐(`file_path_queue`)에 저장합니다.
  - 이 주기는 `min_file_process_interval` 설정 값으로 정해지며, 기본 값은 30초입니다.
  - 이 주기를 넘지 않은 채 호출되었다면 이 작업은 스킵합니다.
  - 처리해야할 파일 순서는 `file_parsing_sort_mode` 설정 값으로 정해지며, 기본 값은 파일의 수정 일시(`modified_time`)입니다.
  - 이 작업으로 인해 수집한 파일 경로 리스트(`file_paths`) 내에 변경된 DAG 코드 및 처리해야할 DAG들을 Scheduler가 인지할 수 있습니다.
- 이후 무한 루프를 돌며 다음 일들을 진행합니다.
  - 처리할 파일 경로를 담은 큐(`file_path_queue`)에서 파일 경로(`file_path`)를 하나씩 꺼내어, `DagFileProcessorProcess` 프로세스를 생성하며 넘깁니다.
    - 이 때 `DagFileProcessorProcess` 프로세스의 개수가 특정 개수를 넘지 않도록 합니다.
    - 이 특정 개수는 `parsing_processes` 설정 값으로 정해지며, 기본 값은 2개입니다.
    - 즉 한번에 `parsing_processes`의 개수만큼만 `DagFileProcessorProcess`를 만들며, `DagFileProcessorProcess`는 하나의 File에 대해서 처리합니다.
  - `DagFileProcessorProcess`가 완료되길 기다립니다. 완료되면, 그 결과를 기록합니다.
  - 무한 루프 전에 실행한 두 작업(DAG Directory내 파일 경로 읽기와 처리해야할 파일 목록을 만드는 일)을 실행합니다.
  - 좀비 상태인 Task Instance를 찾아 좀비 Task 목록을 변경 합니다.
  - 일정 시간을 넘긴 `DagFileProcessorProcess` 프로세스를 죽입니다.
    - 이 일정 시간은 `dag_file_processor_timeout` 설정 값으로 정해지며, 기본 값은 50초입니다.
  - `DagFileProcessorAgent` 객체(부모 프로세스)에게 모든 파일을 처리했는지 여부를 보냅니다.

#### DagFileProcessorProcess

- `DagFileProcessorManager`에 의해 만들어지는 **프로세스**입니다.
- `parsing_processes` 설정 값만큼 프로세스가 생성되며, 기본적으로 2개 생성됩니다.
- 내부적으로 `DagFileProcessor` 객체를 만들어 다음과 같은 일을 합니다.
  - 생성될 때 넘어온 `file_path`에 해당하는 파일을 실행하고 DAG 인스턴스를 찾습니다.
  - DAG 인스턴스를 Serialize하고 Database에 저장합니다.
  - 이 과정 중 오류 역시 Database에 저장합니다.


:::tip
위 내용을 더 깊게 드릴다운 해보고 싶다면 직접 관련 코드를 보시기를 추천합니다.

- [DagFileProcessorAgent, DagFileProcessorManager](https://github.com/apache/airflow/blob/2.2.3/airflow/dag_processing/manager.py)
- [DagFileProcessorProcess](https://github.com/apache/airflow/blob/2.2.3/airflow/dag_processing/processor.py)
:::

### DAG Run과 Task Instance의 상태를 변경하고 Executor가 실행시킬 큐에 Task Instance를 넣는 일

Scheduler는 `DagFileProcessorManager`를 통해 처리해야할 DAG을 Database에 Serialize하는 한편,
이렇게 Serialized 된 DAG을 찾아 DAG Run과 Task Instance의 상태를 변경하고, Executor가 실행할 Task Instance를 Queue에 보내는 작업도 합니다.

이 과정을 좀 더 구체적으로 설명하면 다음과 같습니다.

- 무한 루프 안에서 아래 로직을 진행합니다.
- Database에서 스케줄링된 DAG을 특정 개수만큼 찾아 `QUEUED` 상태인 DAG Run들을 만들고 Database에 저장합니다..
  - 이 특정 개수는 `max_dagruns_to_create_per_loop` 설정 값을 통해 지정할 수 있습니다. 기본 값은 10개입니다.
- Database에서 `QUEUED` 상태인 DAG Run들을 찾아 인스턴스로 만들고, `RUNNING` 상태로 바꿉니다.
- `RUNNING` 상태인 Dag Run들의 Task Instance 상태를 Database에서 조사하고, 이 Task Instance의 상태에 따라 DAG Run의 상태를 바꿉니다.
  - 실행할 준비가 된 Task Instance는 `SCHEDULED` 상태로 바꿉니다.
- Executor의 Slot이 남아있는지 확인합니다.
  - 남아있지 않으면 로직을 탈출하여, 다시 루프문 처음부터 진행합니다.
- `SCHEDULED` 상태인 Task Instance를 최대 특정 개수만큼 Executor가 실행할 Queue에 보냅니다.
  - 최대 특정 개수는 `max_tis_per_query` 설정 값으로 지정할 수 있습니다. 기본 값은 512개 입니다.
  - Task Instance의 Priority 값에 따라 Queue에 넣습니다.

:::tip
위 내용을 더 깊게 드릴다운 해보고 싶다면 직접 관련 코드를 보시기를 추천합니다.

- [SchedulerJob](https://github.com/apache/airflow/blob/2.2.3/airflow/jobs/scheduler_job.py)
- [DAGRun](https://github.com/apache/airflow/blob/2.2.3/airflow/models/dagrun.py)
:::

## 설정

`$AIRFLOW_HOME/airflow.cfg` 파일에 다음과 같은 설정들을 지정해볼 수 있습니다.

```
[scheduler]
catchup_by_default=True
dag_dir_list_interval=300
file_parsing_sort_mode=modified_time
max_dagruns_per_loop_to_schedule=20
max_dagruns_to_create_per_loop=10
max_tis_per_query=512
min_file_process_interval=30
orphaned_tasks_check_interval=300
parsing_processes=2
```

### `catchup_by_default`

`BaseOperator` 생성자의 `catchup` 의 기본 값에 대한 설정값 입니다. 기본적으로 `True`로 설정되어 있습니다.

### `dag_dir_list_interval`

DAG Directory에서 얼마나 자주 새로운 파일을 스캔할지에 대한 주기에 대한 설정값 입니다. 기본 값은 300초 입니다.

### `file_parsing_sort_mode`

파싱할 DAG 파일의 정렬 방법에 대한 설정값 입니다. 정렬 방법은 3가지가 있습니다.

- `modified_time`
  - 파일의 수정 시간을 기준으로 정렬합니다.
  - 대규모에서 최근 수정된 DAG를 먼저 구문 분석하는 데 유용합니다.
- `random_seeded_by_host`
  - 여러 Scheduler에서 무작위로 정렬하지만 동일한 호스트에서 동일한 순서로 정렬합니다.
  - 이는 각 Scheduler가 다른 DAG 파일을 구문 분석할 수 있는 HA 모드에서 Scheduler와 함께 실행할 때 유용합니다.
-alphabetical
  - 파일명으로 정렬합니다.

기본 값은 `modified_time` 입니다.

### `max_dagruns_per_loop_to_schedule`

Scheuler가 한 번의 루프에서 검사(및 잠금)해야 하는 Dag Run의 촤대 개수에 대한 설정값 입니다. 기본 값은 20개입니다.

### `max_dagruns_to_create_per_loop`

한 번의 Scheduler 루프에서 DAG Run으로 생성할 최대 DAG의 개수에 대한 설정값 입니다. 기본 값은 10개입니다.

### `max_tis_per_query`

Executor가 실행할 Queue에 보낼 `SCHEDULED` 상태의 Task Instance의 최대 개수에 대한 설정값 입니다. 기본 값은 512개 입니다.

### `min_file_process_interval`

스캔한 DAG 파일들에 대해 파싱 및 처리할 주기에 대한 설정값 입니다. 즉 얼마나 자주 DAG File이 업데이트 되었는지를 설정할 수 있습니다. 기본 값은 30초입니다.

### `orphaned_tasks_check_interval`

고아 Task와 Scheduling Job에 대해서 확인하는 주기에 대한 설정값 입니다. 기본값은 300초입니다.

### `parsing_processes`

DAG 파일을 파싱하고 처리하는 `DagFileProcessorProcess` 프로세스의 수에 대한 설정값 입니다. 기본 값은 2개입니다.

:::tip
Scheduler에 대한 더 많은 설정은 [공식 문서](https://airflow.apache.org/docs/apache-airflow/stable/configurations-ref.html#scheduler)에서 확인할 수 있습니다.
:::

## 함께보면 좋은 내용

- [Diving Into Airflow Scheduler](https://blog.kk17.net/post/diving-into-airflow-scheduler/)
- [Deep dive in to the Airflow scheduler - Airflow Summit 2021](https://www.youtube.com/watch?v=DYC4-xElccE&t=2316s)
