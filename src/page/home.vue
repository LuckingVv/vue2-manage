<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <menuBar></menuBar>
    <!-- 头部区域 -->
    <headBar></headBar>
    <!-- 主内容区域 -->
    <mainC></mainC>
  </div>
</template>

<script>
import menuBar from './menuBar'
import headBar from './headBar'
import mainC from './main'
export default {
  components: {
    menuBar,
    headBar,
    mainC
  }
}
</script>

<style scoped lang="less">
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}
</style>
