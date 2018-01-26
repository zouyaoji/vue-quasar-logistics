<template>
  <div class="header"> 
    <q-toolbar class="no-wrap items-center relative-position q-toolbar-normal">
        <div class="menu-toggle">
          <q-btn flat @click="menuClick">
            <q-icon name="menu" />
          </q-btn>
        </div>
        <!-- <div class="logo-collapsed"><a><img src="../../assets/images/logo.png"></a></div> -->
        <q-toolbar-title :padding="1" class="menu-link">
          Vue Test
        </q-toolbar-title>
        <div class="container mainmenu">
          
          <div class="logo"><a><img src="~assets/imgs/logo2.png"></a></div>
          <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#005cac" text-color="#f5f5f5" active-text-color="#ffe100" router>
            <template v-for="(item, index) in $router.options.routes[1].children" v-if="item.show">
              <el-menu-item :key="index" :index="item.path" v-if="item.children == null">{{item.name}}</el-menu-item>
              <el-submenu :key="index" :index="item.path" v-else>
                <template slot="title">{{item.name}}</template>
                <template v-for="(subItem, subIndex) in item.children" v-if="subItem.show">
                  <el-menu-item :key="subIndex" :index="subItem.path">{{subItem.name}}</el-menu-item>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </div>
      </q-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'vHeader',
  computed: {
    ...mapGetters({
      isMenuCollapse: 'getIsMenuCollapse'
    })
  },
  created () {
  },
  methods: {
    ...mapMutations({
      setIsMenuCollapse: 'setIsMenuCollapse'
    }),
    menuClick () {
      this.$parent.toggleLeft()
      this.setIsMenuCollapse(true)
    }
  }
}
</script>

<style scoped>
.q-toolbar {
  height: 70px;
  overflow: visible;
  background-color: #005cac;
}

.logo {
  float: left;
  z-index: 3000;
  position: relative;
}

.logo a {
  display: table-cell;
  height: 70px;
  vertical-align: middle;
}

.logo img {
  height: 50px;
  vertical-align: middle;
}

.logo-collapsed {
  float: left;
  z-index: 3000;
  position: relative;
}

.logo-collapsed a {
  display: table-cell;
  height: 70px;
  vertical-align: middle;
}

.logo-collapsed img {
  height: 50px;
  vertical-align: middle;
}

</style>
