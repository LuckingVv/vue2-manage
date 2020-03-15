/* eslint-disable no-unused-vars */
<template>
  <div
    class="container"
    :class="$store.state.app.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <!-- 导航菜单隐藏显示切换 -->
    <span class="collapse-switcher" @click.prevent="collapse" style="padding: 0px 15px;">
      <i :class="$store.state.app.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </span>
    <span class="tool-bar">
      <!-- 用户信息 -->
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <span class="el-dropdown-link">
          <img :src="this.userAvatar" />
          {{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
// import vuex from 'vuex'
export default {
  data() {
    return {
      isCollapse: false,
      username: 'LuckingV',
      userAvatar: '',
      activeIndex: ''
    }
  },
  methods: {
    // 折叠导航栏
    collapse: function() {
      this.$store.commit('collapse')
    }
  },
  mounted() {
    this.sysName = 'Manage Cloud'
    var user = sessionStorage.getItem('user')
    if (!user) {
      this.userName = user
      this.userAvatar = require('@/assets/user.png')
    }
  }
}
</script>

<style scoped lang="less">
.container {
  position: absolute;
  left: 200px;
  right: 0px;
  height: 60px;
  line-height: 60px;
  .collapse-switcher {
    float: left;
    cursor: pointer;
    color: rgba(0,0,0,.6);
    i {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
  }
  .tool-bar {
    float: right;
    .user-info-dropdown {
      font-size: 20px;
      padding-right: 20px;
      color: rgba(0,0,0,.6);
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin: 10px 0px 10px 10px;
        float: right;
      }
    }
  }
}

.menu-bar-width {
  left: 200px;
}
.menu-bar-collapse-width {
  left: 65px;
}
</style>
