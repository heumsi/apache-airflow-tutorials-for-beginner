const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Apache Airflow Tutorials for Beginner',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Docs for beginners who want to use Apache Airflow",

  base: "/apache-airflow-tutorials-for-beginner/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'google-site-verification', content: 'wjX_mSoZBgO9SZMvjr96yOjo6n3_7pS8xNdmzDl1ESw' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'twitter:title', content: title }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://heumsi.github.io/apache-airflow-tutorials-for-beginner/' }],
    ['meta', { property: 'og:site_name', content: title}],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F72Zk1%2FbtqPysahU2H%2Fdbpj3pZ651K59V8k561FrK%2Fimg.png' }],
    ['meta', { property: 'og:article:author', content: 'heumsi' }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-PW03QPB3R3",
      },
    ],
    ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-PW03QPB3R3');"]],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/heumsi/apache-airflow-tutorials-for-beginner',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    smoothScroll: true,
    logo: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F72Zk1%2FbtqPysahU2H%2Fdbpj3pZ651K59V8k561FrK%2Fimg.png",
    sidebar: [
      {
        title: '시작하기',
        path: '/getting-started/',
        collapsable: true,
        children: [
          ['/getting-started/01-installation/', '설치하기'],
          ['/getting-started/02-deployment/', '배포하기'],
          ['/getting-started/03-writing-a-dag/', 'DAG 작성하기'],
          ['/getting-started/04-running-a-dag/', 'DAG 실행하기'],
          ['/getting-started/05-outro/', '마치며']
        ]
      },
      {
        title: 'DAG',
        path: '/dags/',
        collapsable: true,
        children: [
          {
            title: '다양한 Task 의존성 작성하기',
            path: '/dags/01-writing-various-tasks-dependencies/',
            collapsable: true,
            children: [
              ['/dags/01-writing-various-tasks-dependencies/01-simple-task-dependency/', '간단한 Task 의존성 작성하기'],
              ['/dags/01-writing-various-tasks-dependencies/02-parallel-tasks-flow/', '병렬 Task 의존성 작성하기'],
              ['/dags/01-writing-various-tasks-dependencies/03-parallel-task-list-flow/', '병렬 Task 리스트 의존성 작성하기'],
              ['/dags/01-writing-various-tasks-dependencies/04-conditional-task-flow-with-branch/', '조건에 따라 다른 Task 의존성 작성하기'],
              ['/dags/01-writing-various-tasks-dependencies/05-conditional-task-flow-with-depends-on-past/', '직전 DAG Run의 Task 상태에 따라 Task 실행 여부를 결정하기'],
              ['/dags/01-writing-various-tasks-dependencies/06-conditional-task-flow-with-wait-for-downstream/', '직전 DAG Run의 상태에 따라 Task 실행 여부를 결정하기'],
              ['/dags/01-writing-various-tasks-dependencies/07-conditional-task-flow-with-trigger-rule/', 'Trigger Rule에 따라 Task 실행 여부를 결정하기'],
              ['/dags/01-writing-various-tasks-dependencies/08-subdag/', 'SubDAG 만들기'],
            ]
          },
          {
            title: 'DAG 간 의존성 작성하기',
            path: '/dags/02-dependencies-between-dags/',
            collapsable: true,
            children: [
              ['/dags/02-dependencies-between-dags/01-trigger-dagrun/', 'DAG에서 다른 DAG Run을 트리거하기'],
              ['/dags/02-dependencies-between-dags/02-waiting-tasks-in-another-dagrun/', 'DAG에서 다른 DAG Run의 Task를 기다리기'],
            ]
          },
          {
            title: 'DAG 시각화와 문서화하기',
            path: '/dags/03-visualization-and-documentation-dags/',
            collapsable: true,
            children: [
              ['/dags/03-visualization-and-documentation-dags/01-task-groups/', 'UI에 Task들을 Group으로 표현하기'],
              ['/dags/03-visualization-and-documentation-dags/02-labels/', 'UI에 Task 간 Edge에 Label 추가하기'],
              ['/dags/03-visualization-and-documentation-dags/03-documentation/', 'UI에 DAG 문서화 추가하기'],
              ['/dags/03-visualization-and-documentation-dags/04-save-dag-image/', 'DAG을 이미지로 저장하기'],
            ]
          },
          {
            title: '다양한 Operator 사용해보기',
            path: '/dags/04-using-various-operators/',
            collapsable: true,
            children: [
              ['/dags/04-using-various-operators/01-bash-operator/', 'BashOperator'],
              ['/dags/04-using-various-operators/02-python-operator/', 'PythonOperator'],
              ['/dags/04-using-various-operators/03-python-virtualenv-operator/', 'PythonVirtualenvOperator'],
              ['/dags/04-using-various-operators/04-branch-python-operator/', 'BranchPythonOperator'],
              ['/dags/04-using-various-operators/05-dummy-operator/', 'DummyOperator'],
              ['/dags/04-using-various-operators/06-email-operator/', 'EmailOperator'],
              ['/dags/04-using-various-operators/07-custom-operator/', 'Custom Operator'],
            ]
          },
          {
            title: '그 외 다양한 기능 사용해보기',
            path: '/dags/05-etc-features/',
            collapsable: true,
            children: [
              ['/dags/05-etc-features/01-xcoms/', 'XComs - Task 간 데이터 주고받기'],
              ['/dags/05-etc-features/02-variables/', 'Variables - 전역 변수 사용하기'],
              ['/dags/05-etc-features/03-connections-and-hooks/', 'Connections와 Hooks - 외부 시스템과 연결 및 작업하기'],
              ['/dags/05-etc-features/04-templates/', 'Templates - 동적으로 변수를 넘기는 또다른 방법'],
            ]
          },
          {
            title: 'Taskflow API 사용해보기',
            path: '/dags/06-taskflow-api/',
            collapsable: true,
            children: [
              ['/dags/06-taskflow-api/01-concept/', '개념'],
              ['/dags/06-taskflow-api/02-custom-dependencies/', '커스텀하게 Task간 의존성 작성하기'],
              ['/dags/06-taskflow-api/03-with-operators/', 'Operator와 함께 사용하기'],
              ['/dags/06-taskflow-api/04-virtualenv/', 'Virtualenv 사용하기'],
              ['/dags/06-taskflow-api/05-docker/', 'Docker 사용하기'],
            ]
          },
          {
            title: 'Providers 사용법 알아보기',
            path: '/dags/07-providers/',
            collapsable: true,
          },
        ]
      },
      {
        title: '아키텍처',
        path: '/architecture/',
        collapsable: true,
        children: [
          ['/architecture/01-overview/', '개요'],
          ['/architecture/02-dag-directory/', 'DAG Directory'],
          ['/architecture/03-scheduler/', 'Scheduler'],
          {
            title: 'Executor',
            path: '/architecture/04-executor/',
            collapsable: true,
            children: [
              ['/architecture/04-executor/01-sequential-executor/', 'Sequential Executor'],
              ['/architecture/04-executor/02-local-executor/', 'Local Executor'],
              ['/architecture/04-executor/03-celery-executor/', 'Celery Executor'],
              ['/architecture/04-executor/04-kubernetes-executor/', 'Kubernetes Executor'],
            ]
          },
          ['/architecture/05-meta-database/', 'Meta Database'],
          ['/architecture/06-webserver/', 'Webserver'],
        ],
      },
      {
        title: '배포',
        path: '/deployment/',
        collapsable: true,
        children: [
          {
            title: 'Cloud Managed 서비스 이용하기',
            path: '/deployment/01-cloud-vendor/',
            collapsable: true,
            children: [
              ['/deployment/01-cloud-vendor/01-gcp/', 'GCP - Cloud Composer'],
              ['/deployment/01-cloud-vendor/02-aws/', 'AWS - MWAA'],
            ]
          },
          ['/deployment/02-native/', '커맨드로 직접 하나씩 배포하기'],
          ['/deployment/03-docker/', 'Docker로 하나씩 배포하기'],
          ['/deployment/04-docker-compose/', 'Docker Compose로 한 번에 배포하기'],
          ['/deployment/05-kubernetes/', 'Kubernetes에서 Helm Chart로 배포하기'],
        ]
      },
      {
        title: '운영',
        path: '/operation/',
        collapsable: true,
        children: [
          ['/operation/01-timezone/', 'Timezone'],
          ['/operation/02-schedule-interval/', 'Schedule Interval'],
          ['/operation/03-cluster-policies/', 'Cluster Policies'],
          ['/operation/04-priority-weights/', 'Priority Weights'],
          ['/operation/05-rbac/', 'RBAC'],
          ['/operation/06-interfaces/', 'Interfaces'],
        ]
      },
      {
        title: 'FAQ',
        path: '/faq/',
        collapsable: true,
        children: []
      },
    ]
  },

  markdown: {
    lineNumbers: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/last-updated',
    ["sitemap", { hostname: "https://heumsi.github.io/apache-airflow-tutorials-for-beginner/" }],
    'vuepress-plugin-code-copy'
  ]
}
