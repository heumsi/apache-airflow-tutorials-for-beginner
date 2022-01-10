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
    sidebar: {
      '/getting-started/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['installation', '설치하기'],
            ['execution/', '실헹하기'],
            ['writing-dag/', 'DAG 작성하기'],
          ]
        }
      ]
    }
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
