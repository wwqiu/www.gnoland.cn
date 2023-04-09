import fs from 'fs'
import path from 'path'
import { SidebarConfigArray } from 'vuepress/config'

export function getGuideSidebar (groupA, groupB, groupC): SidebarConfigArray {
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
        'tutorial/getting-started',
        'tutorial/testnet-interaction',
        'tutorial/first-gno-contract',
        'tutorial/local-node'  

      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'docs/concepts',
        'docs/client',
        'docs/stdlib'
      ]
    }
  ]

  return sidebar
}
