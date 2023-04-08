import { defineConfig } from 'vuepress/config'
import {
  Sidebar4ZH,
  NavItems4ZH
} from './config/index'


export default defineConfig({
  dest: './public',
  theme: '@vuepress/theme-default',
  markdown: {
    lineNumbers: true
  },
  title: 'GnoLand中文网',
  description: 'gnoland合约开发文档',
  themeConfig: {
      logo: '/logo.svg',
      sidebar: Sidebar4ZH,
      smoothScroll: true,
      // displayAllHeaders: true,
      sidebarDepth: 1,
      nav: [
        { text: '新闻', link: '/news/'},
        { text: '指南', link: '/'},
        { text: 'GitHub', link: 'https://github.com/wwqiu/www.gnoland.cn' }
      ]
    },
    
    plugins:[
      [
        'vuepress-plugin-container',
        {
          type: 'right',
          defaultTitle: '',
        },
      ],
      ['vuepress-plugin-container', {
        type: 'news',
        defaultTitle: '',
      }]
    ]
});