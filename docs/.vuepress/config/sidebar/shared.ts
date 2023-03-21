import fs from 'fs'
import path from 'path'
import { SidebarConfigArray } from 'vuepress/config'

export function getGuideSidebar (groupA, groupB): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'game-of-realm'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'getting-started',
        'testnet-interaction',
        'first-gno-contract'
      ]
    }
  ]

  return sidebar
}
