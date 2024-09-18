import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daredevil's Blog",
  description: "我的学习生活记录分享！",
  srcDir: './src',
  base: '/VitepressBlog/',
  head: [
    ['link', {rel: 'icon', href: '/daredevil-32.svg'}]
  ],
  themeConfig: {
    logo: '/daredevil-32.svg',
    // 导航栏
    nav: [
      {
        text: 'IT技术',
        items: [
          {text: 'C++', link: '/it/cpp'}
        ]
      },
      {
        text: '语言学习',
        items: [
          {text: '英语', link: '/language/english'},
          {text: '日语', link: '/language/japanese'},
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/it/cpp/': [
        {
          text: 'C++',
          collapsed: false,
          items: [
            {text: '语法', link:'/it/cpp/index'}
          ]
        },
      ],
      '/language/english/': [
        {
          text: '英语',
          collapsed: false,
          items: [
            {text: '语法', link:'/language/english/grammar'}
          ]
        },
      ],
      '/language/japanese/': [
        {
          text: '日语',
          collapsed: false,
          items: [
            {text: '语法', link:'/language/japanese/index'}
          ]
        }
      ]
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/q2280169' }
    ],
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Gao Wei'
    }
  }
})
