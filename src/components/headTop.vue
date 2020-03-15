<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in $route.meta.navInfo" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.breadcrumb {
  padding: 10px;
  border-color: rgba(38, 86, 114, 0.2);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  // background: rgba(180, 189, 196, 0.1);
}
</style>
