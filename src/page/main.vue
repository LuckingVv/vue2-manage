<template>
  <div
    class="container"
    :class="$store.state.app.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <headTop></headTop>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
export default {
  components: {
    headTop
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped lang="less">
.container {
  top: 60px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  .breadcrumb {
    padding: 10px;
    border-color: rgba(38, 86, 114, 0.2);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    background: rgba(138, 158, 170, 0.2);
  }
}

.menu-bar-width {
  left: 200px;
}
.menu-bar-collapse-width {
  left: 65px;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.8s, opacity 0.8s;
}
.fade-enter {
  transform: translateX(-40px);
  opacity: 0;
}
.fade-leave-active {
  transform: translateX(40px);
  opacity: 0;
}
.fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
