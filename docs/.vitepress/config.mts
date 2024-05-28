import path from 'path';
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Alnitak弹幕视频网站文档",
  description: "基于GO + Nuxt的弹幕视频网站",
  head: [
    ['meta', { name: 'keywords', content: 'go, vue, nuxt, 弹幕网站' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
    }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  srcDir: `${path.resolve(process.cwd())}/src`,
  themeConfig: {
    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://github.com/wangzmgit/alnitak/tree/doc/docs/src/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangzmgit/alnitak' },
    ],
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: 'Copyright © 2020-2024'
    },
    nav: [
      { text: '项目指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '接口文档', link: '/api/', activeMatch: '/api/' },
      { text: '赞助', link: '/other/donate' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '项目介绍',
          collapsed: false,
          items: [
            { text: '简介', link: '/guide/introduce' },
          ]
        },
        {
          text: '部署指南',
          collapsed: false,
          items: [
            { text: '环境配置', link: '/guide/' },
            { text: '项目配置', link: '/guide/config' },
            { text: 'Docker部署', link: '/guide/docker' },
            { text: '手动部署', link: '/guide/manual' },
            { text: '域名配置', link: '/guide/domain' },
          ]
        },
        {
          text: '项目指南',
          collapsed: true,
          items: [
            { text: '项目结构', link: '/guide/' },
            { text: '项目配置', link: '/guide/config' },
          ]
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            { text: '贡献指南', link: '/guide/other/contribution' },
            { text: '常见问题解答', link: '/guide/qa' },
            { text: '相关截图', link: '/guide/screenshot' }
          ]
        }
      ],
      '/api/': [
        {
          text: '接口文档',
          items: [
            // { text: '开始', link: '/api/' },
            // { text: '用户相关接口', link: '/api/user' },
            // { text: '人机验证相关接口', link: '/api/captcha' },
            // { text: '文件上传相关接口', link: '/api/upload' },
            // { text: '分区相关接口', link: '/api/partition' },
            // { text: '视频相关接口', link: '/api/video' },
            // { text: '视频资源接口', link: '/api/resource' },
            // { text: '点赞收藏接口', link: '/api/archive' },
            // { text: '收藏夹接口', link: '/api/collection' },
          ]
        }
      ]
    }
  }
})