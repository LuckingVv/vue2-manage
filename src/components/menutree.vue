<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.key">
    <template slot="title">
      <i :class="menu.iconClass"></i>
      <span slot="title">{{menu.name}}</span>
    </template>
    <menutree v-for="item in menu.children" :key="item.key" :menu="item"></menutree>
  </el-submenu>
  <el-menu-item v-else :index="menu.key" :key="menu.key">
    <template slot="title">
      <i :class="menu.iconClass"></i>
      <span slot="title">{{menu.name}}</span>
    </template>
  </el-menu-item>
</template>

<script>
import menutree from '@/page/manage'
export default {
  name: 'menutree',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  components: {
    menutree
  }
}
</script>

<style lang='less' scoped></style>
