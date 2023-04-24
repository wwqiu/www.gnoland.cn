<template>
    <ParentLayout>
      <template #sidebar-bottom>
        <div style="margin-top:1.5rem;text-align:center;display:flex;justify-content:center">
            <img src="/wechat_group.png" style="float:left;margin-right:1rem;width:150px;height:150px">
        </div>
        <div style="margin-top:0.5rem;display:flex;justify-content:center">
            <a style="font-size:0.75rem;width:160px;height:160px;color:black">如果你也对Gnoland开发感兴趣，欢迎加入我们的学习交流群</a>
        </div>
      </template>
    </ParentLayout>
  </template>
  
  <script>
  import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

  export default {
    name: 'Layout',
  
    components: {
      ParentLayout
    }
  }
  </script>