(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{420:function(s,t,a){s.exports=a.p+"assets/img/image-20220123003635284.4ed725fd.png"},421:function(s,t,a){s.exports=a.p+"assets/img/image-20220122220345864.2e0e2836.png"},422:function(s,t,a){s.exports=a.p+"assets/img/image-20220122225639740.a4d3aa89.png"},617:function(s,t,a){"use strict";a.r(t);var n=a(35),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"직전-dag-run의-task-상태에-따라-task-실행-여부를-결정하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#직전-dag-run의-task-상태에-따라-task-실행-여부를-결정하기"}},[s._v("#")]),s._v(" 직전 DAG Run의 Task 상태에 따라 Task 실행 여부를 결정하기")]),s._v(" "),n("h2",{attrs:{id:"graph-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#graph-view"}},[s._v("#")]),s._v(" Graph View")]),s._v(" "),n("p",[s._v("다음처럼 간단한 Task 의존성을 가지는 DAG을 작성해볼 것입니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(420),alt:"image-20220123003635284"}})]),s._v(" "),n("p",[s._v("간단해 보이지만 하나 다른 점은 "),n("strong",[s._v("이전 DAG Run의 Task Instance의 상태가 성공인 경우에만 현재 DAG Run의 Task Instance을 실행")]),s._v("한다는 것입니다.\nGrahp View에서는 이러한 내용이 잘 보이지 않으니 Tree View를 살펴보겠습니다.")]),s._v(" "),n("h2",{attrs:{id:"tree-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tree-view"}},[s._v("#")]),s._v(" Tree View")]),s._v(" "),n("p",[s._v("작성할 DAG을 실행하면 다음과 같은 Tree View를 얻게 됩니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(421),alt:"image-20220122220345864"}})]),s._v(" "),n("p",[s._v("자세히 살펴보면, 첫 번째 DAG Run의 두 번째 Task Instnace가 실패한 상태이기 때문에 두 번째 DAG Run의 두 번째 Task Instance가 실행되지 않은 상태임을 알 수 있습니다.\n(세 번째 Task Instance 역시 두 번째 Task Instance에 의존이 있기 때문에 실행되지 않았습니다.)")]),s._v(" "),n("h2",{attrs:{id:"code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[s._v("#")]),s._v(" Code")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" datetime "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" timedelta\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" time "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sleep\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" airflow "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DAG\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" airflow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operators"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("python "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" PythonOperator\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" airflow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dates "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" days_ago\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" DAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    dag_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"05_conditional_tasks_with_depends_on_past"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    description"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Task 의존성에 depends_on_past를 통해 조건문을 가지는 DAG 예제입니다."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    default_args"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"owner"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"heumsi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"retries"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"retry_delay"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" timedelta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minutes"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    start_date"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("days_ago"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    schedule_interval"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("timedelta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("days"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    tags"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"examples"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01_writing_various_task_flows"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" dag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dump")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("must_fail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v("\n\n    t1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PythonOperator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"task_1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" python_callable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dump"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    t2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PythonOperator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        task_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"task_2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" python_callable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("must_fail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" depends_on_past"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    t3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PythonOperator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"task_3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" python_callable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dump"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    t1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" t2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" t3\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("PythonOperator")]),s._v("의 "),n("code",[s._v("depends_on_past")]),s._v(" 파라미터 값을 "),n("code",[s._v("True")]),s._v("로 넘겨줍니다.\n"),n("ul",[n("li",[n("code",[s._v("depends_on_past")]),s._v(" 의 기본 값은 "),n("code",[s._v("False")]),s._v(" 입니다.")]),s._v(" "),n("li",[n("code",[s._v("PythonOperator")]),s._v(" 뿐 아니라 제공되는 모든 "),n("code",[s._v("Operator")]),s._v("에 "),n("code",[s._v("depends_on_past")]),s._v("가 존재합니다.")])])])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[n("code",[s._v("depends_on_past=True")]),s._v(" 를 다음처럼  "),n("code",[s._v("default_args")]),s._v(" 에 넣어주면, 모든 Task에 대해 직전 DAG Run의 Task 각각의 상태에 따라 실행할 수 있게 됩니다.")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" DAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    default_args"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"depends_on_past"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" dag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])]),s._v(" "),n("h2",{attrs:{id:"web-ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web-ui"}},[s._v("#")]),s._v(" Web UI")]),s._v(" "),n("p",[n("img",{attrs:{src:a(422),alt:"image-20220122225639740"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);