.DEFAULT_GOAL:=help

export AIRFLOW_HOME=.

.PHONY: format
format: ## 코드를 포매팅합니다.
	pycln . --all
	black .
	isort . --profile black

.PHONY: scheduler
scheduler: ## Airflow Scheduler를 실행합니다.
	airflow scheduler

.PHONY: webserver
webserver: ## Airflow Webserver를 실행합니다.
	airflow webserver

.PHONY: init-db
init-db: ## Airflow Database를 초기화합니다.
	airflow db init && \
	airflow users create \
        --username admin \
        --password 1234 \
        --firstname heumsi \
        --lastname jeon \
        --role Admin \
        --email heumsi@naver.com

.PHONY: run-db
run-db: ## Airflow Database를 실행합니다.
	docker restart postgres || \
 	docker run --name postgres -e POSTGRES_USER=airflow -e POSTGRES_PASSWORD=1234 -p 5432:5432 postgres:13

.PHONY: help
help: ## 사용 가능한 커멘드를 확인합니다
	@echo 'usage: make [command]'
	@echo
	@echo 'command:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
