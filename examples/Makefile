export AIRFLOW_HOME=.

.PHONY: format
format:
	pycln . --all
	black .
	isort . --profile black

.PHONY: scheduler
scheduler:
	airflow scheduler

.PHONY: webserver
webserver:
	airflow webserver

.PHONY: init-db
init-db:
	airflow db init && \
	airflow users create \
        --username admin \
        --password 1234 \
        --firstname heumsi \
        --lastname jeon \
        --role Admin \
        --email heumsi@naver.com

.PHONY: run-db
run-db:
	docker restart postgres || \
 	docker run --name postgres -e POSTGRES_USER=airflow -e POSTGRES_PASSWORD=1234 -p 5432:5432 postgres:13
