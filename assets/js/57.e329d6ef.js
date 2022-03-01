(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{606:function(a,e,l){"use strict";l.r(e);var t=l(35),c=Object(t.a)({},(function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h1",{attrs:{id:"local-executor"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#local-executor"}},[a._v("#")]),a._v(" Local Executor")]),a._v(" "),l("p",[a._v("Local Executor는 Task Instance를 병렬적으로(Parallel) 여러 개 실행할 수 있습니다.\n각 Task Instance는 별도의 프로세스에서 실행되는데 이렇게 Task Instance를 실행하는 프로세스를 워커라고 부릅니다.\n한편, "),l("code",[a._v("$AIRFLOW_HOME/airflow.cfg")]),a._v(" 설정 파일에서 "),l("code",[a._v("parallelism")]),a._v(" 설정 값에 따라 Local Executor의 동작 과정이 조금 달라집니다.")]),a._v(" "),l("p",[l("code",[a._v("parallelism")]),a._v(" 의 값이 0인 경우, Unlimited Parallelism 이라고 부르며, 한 번에 실행할 수 있는 Task Instance의 개수에 제한이 없습니다.\n즉 "),l("code",[a._v("QUEUED")]),a._v(" 상태인 모든 Task Instance가 각각의 프로세스로 생성되어 실행되며, 실행이 완료돠면 프로세스도 종료됩니다.")]),a._v(" "),l("p",[l("code",[a._v("parallelism")]),a._v(" 의 값이 0이 아닌 경우, Limited Parallelism 이라고 부르며, Local Executor 실행 초기에 "),l("code",[a._v("parallelism")]),a._v(" 개수 만큼의 워커 프로세스를 미리 만들어둡니다.\n이후 "),l("code",[a._v("QUEUED")]),a._v(" 상태인 Task Instance들은 이 워커 프로세스들 내에서 실행됩니다.")]),a._v(" "),l("p",[l("code",[a._v("parallelism")]),a._v(" 의 기본 설정 값은 32로 되어있습니다. (즉, Airflow에서 별도의 설정을 하지 않고 Local Executor를 사용하면 Local Executor는 Limited Parallelism의 형태로 동작합니다.)")]),a._v(" "),l("p",[l("img",{attrs:{src:"https://miro.medium.com/max/1400/1*juMYCvszj1lcycoEOvGVAw.png",alt:""}}),a._v(" "),l("em",[a._v("출처: https://insaid.medium.com/executors-in-airflow-2357675b8284")])])])}),[],!1,null,null,null);e.default=c.exports}}]);