const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Apache Airflow Tutorials for Beginner',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Docs for beginner who want to use Apache Airflow",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    logo: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F72Zk1%2FbtqPysahU2H%2Fdbpj3pZ651K59V8k561FrK%2Fimg.png",
    nav: false,
    sidebar: [
      {
        title: 'Getting Started',
        path: '/getting-started/',
        collapsable: true,
        children: [
          ['/getting-started/01-installation/', '설치하기'],
          ['/getting-started/02-execution/', '실행하기'],
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
            title: '다양한 Task 흐름 작성하기',
            path: '/dags/01-writing-various-task-flows/',
            collapsable: true,
            children: [
              ['/dags/01-writing-various-task-flows/01-simple-task-flow/', '간단한 Task 흐름 작성하기'],
              ['/dags/01-writing-various-task-flows/02-parallel-tasks-flow/', '병렬 Task 흐름 작성하기'],
              ['/dags/01-writing-various-task-flows/03-parallel-task-list-flow/', '병렬 Task 흐름 리스트 작성하기'],
              ['/dags/01-writing-various-task-flows/04-conditional-task-flow-with-branch/', '조건에 따라 다른 Task 흐름 작성하기'],
              ['/dags/01-writing-various-task-flows/05-conditional-task-flow-with-depends-on-past/', '직전 DAG Run의 Task 상태에 따라 Task 실행 여부를 결정하기'],
              ['/dags/01-writing-various-task-flows/06-conditional-task-flow-with-wait-for-downstream/', '직전 DAG Run의 상태에 따라 Task 실행 여부를 결정하기'],
              ['/dags/01-writing-various-task-flows/07-conditional-task-flow-with-trigger-rule/', 'Trigger Rule에 따라 Task 실행 여부를 결정하기'],
              ['/dags/01-writing-various-task-flows/08-subdag/', 'SubDAG 만들기'],
            ]
          }

        ]
      }
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
    '@vuepress/plugin-medium-zoom',
  ]
}
