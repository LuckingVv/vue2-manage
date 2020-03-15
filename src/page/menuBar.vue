<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div
      class="logo"
      :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
      @click="$router.push('/')"
    >
      <img v-if="collapse" src="@/assets/logo.png" />
      <div>{{collapse?'':appName}}</div>
    </div>
    <!-- <transition> -->
      <el-menu
        ref="navmenu"
        :default-active="activeIndex"
        :collapse="collapse"
        :class="collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
        :background-color="themeColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <menutree v-for="item in menuData" :key="item.key" :menu="item"></menutree>
      </el-menu>
    <!-- </transition> -->
  </div>
</template>

<script>
import menutree from '@/components/menutree'
import home from '@/config/init'
import { mapState } from 'vuex'
export default {
  name: 'sidebar',
  data() {
    return {
      menuData: {},
      activeIndex: ''
    }
  },
  computed: {
    ...mapState({
      appName: state => state.app.appName,
      collapse: state => state.app.collapse,
      themeColor: state => state.app.themeColor,
      textColor: state => state.app.textColor,
      activeTextColor: state => state.app.activeTextColor
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted() {
    this.menuData = home.menuData
  },
  components: {
    menutree
  }
}
</script>

<style lang='less' scoped>
@import '../style/mixin';
.menu-bar-container {
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  z-index: 1020;
  .el-menu {
    position: absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
    // background-color: #2968a30c;
  }
  .logo {
    position: absolute;
    top: 0px;
    height: 60px;
    line-height: 60px;
    background: #545c64;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 0px;
      margin: 10px 10px 10px 10px;
      float: left;
    }
    div {
      font-size: 22px;
      color: white;
      text-align: left;
      padding-left: 20px;
    }
  }
  .menu-bar-width {
    width: 200px;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
</style>
