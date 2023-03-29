import { defineConfig } from 'vuepress/config'
import {
  Sidebar4ZH,
  NavItems4ZH
} from './config/index'


export default defineConfig({
  dest: 'docs/.vuepress/gnoland.cn',
  theme: '@vuepress/theme-default',
  markdown: {
    lineNumbers: true
  },
  title: 'GNO.LAND文档',
  description: 'gnoland合约开发文档',
  themeConfig: {
      sidebar: Sidebar4ZH,
      smoothScroll: true,
      displayAllHeaders: true,
      sidebarDepth: 1,
      nav: [
        { text: 'GitHub', link: 'https://github.com/wwqiu/www.gnoland.cn' }
      ]
    }
});