import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getGuideSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/': getGuideSidebar('开始', '快速上手', '深入')
}

