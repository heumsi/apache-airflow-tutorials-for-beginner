# Custom Operator

Airflow Operator는 직접 Custom 하게 작성할 수 있습니다.
작성자가 직접 Custom Operator를 만드는 방법에 대해 알아봅시다.

## Graph View

다음과 같은 간단한 Task 의존성을 가지는 DAG을 작성할 것입니다.

![img.png](./img.png)

이 떄 `print_sql` Task는 제가 직접 작성한 Custom Operator로 만들어진 Task입니다.

## Code

<<< @/../my-airflow-project/dags/04_using_various_operators/06_custom_operator.py{5,9-22,37-41}

- `9-22` 라인에 `PrintSQLOperator` 라는 이름의 Custom Operator를 정의합니다.
  - Custom Operator는 `BaseOperator` 를 상속받아야 합니다.
  - 또한 `execute` 메서드를 정의해야 합니다.
    - Custom Operator로 정의된 Task Instance 실행 시 `execute` 함수 내용이 실행됩니다.
    - 따라서 Custom Operator의 메인 로직이 `execute` 함수 내에 담겨야 합니다.
  - `ui_color` 파라미터로 Web UI에서의 색을 지정할 수 있습니다. (위 Graph View에서 검은색)
  - `ui_fgcolor` 파라미터로 Web UI에서의 색을 지정할 수 있습니다. (위 Graph View에서 흰색)
  - `template_fields` 파라미터로 템플릿 문법을 지원할 필드를 지정할 수 있습니다.
  - `template_ext` 파라미터로 템플리 문법을 지원할 파일 확장자를 지정할 수 있습니다.
- `37-41` 라인에 `PrintSQLOperator` 로 Task Instance를 정의합니다.
  - `name` 파라미터는 `PrintSQLOperator.template_fields` 에 포함되기 때문에 템플릿 변수를 받을 수 있습니다.
  - `sql` 파라미터는 `06_custom_operator.sql` 라는 파일을 받고 있습니다.
    - `06_custom_operator.sql` 은 다음과 같은 외부 파일입니다.
    - <<< @/../my-airflow-project/dags/04_using_various_operators/06_custom_operator.sql
    - `.sql`이 `PrintSQLOperator.template_ext` 에 포함되기 때문에 `.sql` 파일을 템플릿 문법으로 읽어올 수 있습니다.


## Web UI

실행 결과는 다음과 같습니다.

![img_1.png](./img_1.png)

![img_2.png](./img_2.png)
