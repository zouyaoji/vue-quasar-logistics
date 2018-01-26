<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" class="wrapper">
    <q-transition enter="fadeIn" leave="fadeOut" mode="out-in" :duration="300" @leave="resetScroll">
      <router-view />
    </q-transition>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  name: 'q-app',
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  }
}
</script>

<style>
.el-menu-demo {
  border-bottom-width: 0px;
}

.el-menu-demo .el-menu-item,
.el-menu--horizontal .el-submenu .el-submenu__title {
  height: 70px;
  line-height: 70px;
}

.el-menu-demo .el-menu-item,
.el-menu-demo .el-submenu__title {
  font-size: 18px;
  font-weight: 500;
}

.el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu .el-submenu__title:hover {
    background-color: #e6d748 !important;
    /* font-weight: bold; */
    background-color: rgb(94, 63, 131) !important;
} 

</style>
