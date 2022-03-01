(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{469:function(s,t,a){s.exports=a.p+"assets/img/img.72c977ce.png"},470:function(s,t,a){s.exports=a.p+"assets/img/img_1.674f2d58.png"},471:function(s,t,a){s.exports=a.p+"assets/img/img_2.4d20d42f.png"},634:function(s,t,a){"use strict";a.r(t);var n=a(35),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"dummyoperator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dummyoperator"}},[s._v("#")]),s._v(" DummyOperator")]),s._v(" "),n("p",[n("code",[s._v("DummyOperator")]),s._v(" 는 아무 실행도 하지 않는 Operator입니다. 간혹 Task 간 의존성 흐름 내 필요한 경우에 사용됩니다.")]),s._v(" "),n("h2",{attrs:{id:"graph-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#graph-view"}},[s._v("#")]),s._v(" Graph View")]),s._v(" "),n("p",[s._v("다음과 같은 Task 의존성을 가지는 DAG을 작성해봅시다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(469),alt:"img.png"}})]),s._v(" "),n("ul",[n("li",[n("code",[s._v("first_task_0")]),s._v(" ~ "),n("code",[s._v("first_task_4")]),s._v(" Task Instance는 병렬로 실행됩니다.")]),s._v(" "),n("li",[s._v("이 중 하나가 먼저 성공했다고 하더라도 가운데 "),n("code",[s._v("dummy")]),s._v(" Task Instance가 이전의 모든 Task Instance가 성공되기를 기다리기 때문에,\n"),n("code",[s._v("first_task_0")]),s._v(" ~ "),n("code",[s._v("first_task_4")]),s._v(" 가 모두 성공해야 그 다음 "),n("code",[s._v("second_task_0")]),s._v(" ~ "),n("code",[s._v("second_task_4")]),s._v(" Task Instance를 한 번에 병렬로 실행하게 됩니다.")])]),s._v(" "),n("h2",{attrs:{id:"code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[s._v("#")]),s._v(" Code")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" datetime "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" timedelta\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" time "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sleep\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" airflow "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DAG\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" airflow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operators"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dummy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DummyOperator\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" airflow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operators"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("python "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" PythonOperator\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pendulum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("timezone "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Timezone\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" DAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    dag_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"04_dummy_operator"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    description"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DummyOperator를 사용하는 DAG 예제입니다."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    default_args"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"owner"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"heumsi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"retries"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"retry_delay"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" timedelta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minutes"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    start_date"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tzinfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Timezone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asia/Seoul"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    schedule_interval"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@once"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    tags"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"examples"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"04_using_various_operators"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" dag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dump")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    first_tasks "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        task "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PythonOperator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"first_task_')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" python_callable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dump"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        first_tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    task_2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DummyOperator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dummy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    seconds_tasks "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        task "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PythonOperator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"second_task_')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" python_callable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dump"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        seconds_tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    first_tasks "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" task_2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" seconds_tasks\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h2",{attrs:{id:"web-ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web-ui"}},[s._v("#")]),s._v(" Web UI")]),s._v(" "),n("p",[s._v("다음처럼 잘 실행된 것을 로그를 통해 확인할 수 있습니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(470),alt:"img_1.png"}})]),s._v(" "),n("p",[n("code",[s._v("DummyOperator")]),s._v(" Task Instance는 어떤 로그도 출력하지 않았습니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(471),alt:"img_2.png"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);