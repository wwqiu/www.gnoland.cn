import { defineConfig } from 'vuepress/config'
import {
  Sidebar4ZH,
  NavItems4ZH
} from './config/index'


export default defineConfig({
  theme: '@vuepress/theme-default',
  markdown: {
    lineNumbers: true
  },
  title: 'GNO.LAND文档',
    description: 'gnoland合约开发文档',
    themeConfig: {
        sidebar: Sidebar4ZH,
        sidebarDepth: 1
      }
});