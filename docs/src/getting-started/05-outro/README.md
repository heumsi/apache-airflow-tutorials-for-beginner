# 마치며

Airflow의 설치와 실행, DAG 작성 그리고 실행까지 Airflow를 사용하는 전반적인 흐름과 방법에 대해 배웠습니다.
지금까지 진행한 내용을 정리해보면 다음과 같습니다.

1. 가상환경을 만들고 Airflow 패키지를 설치한다.
2. Airflow를 배포한다.
    - Airflow 프로젝트 루트를 환경변수 `AIRFLOW_HOME`로 지정한다.
    - Airflow Meta Database를 초기화한다.
    - Airflow Admin 권한의 계정을 생성한다.
    - Webserver를 실행한다.
    - Scheduler를 실행한다.
3. DAG을 작성한다.
    - `AIRFLOW_HOME` 경로에 `dags/` 디렉토리를 만든다.
    - 이 안에 DAG을 파이썬 모듈을 통해 작성한다.
    - DAG 작성은 다음으로 구성된다.
        - DAG 인스턴스 정의
        - Task 인스턴스 정의
        - Task 인스턴스 의존성(순서) 정의
4. DAG을 실행한다.
    - 브라우저에서 Webserver에 접속하여 버튼을 통해 DAG을 ON 상태로 만든다.
    - 실행 결과와 로그를 볼 수 있다.
    - Trigger 버튼을 통해 스케줄링 되지 않은 DAG Run을 즉시 만들어 실행할 수 있다.
    - Webserver에서 DAG을 삭제하면 Meta Database에서 해당 DAG의 실행 기록들만 삭제되고, DAG 파일 자체는 삭제되지 않는다.

Airflow 사용에 대한 전체적인 흐름이 좀 느껴지셨나요? 물론 Airflow를 본격적으로 도입하고 사용하려면 더 많은 것들을 알아야 합니다.
이번 챕터에서는 Airflow를 사용하면 대충 이런 흐름이구나 정도만 느끼셨으면 충분합니다.

다음 챕터부터는 Airflow 사용에 대해 좀 더 자세하게 알아봅시다.
