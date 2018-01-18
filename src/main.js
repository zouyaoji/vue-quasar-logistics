// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
// import Quasar from 'quasar'
import Quasar, * as All from 'quasar'
import BaiduMap from 'vue-baidu-map'
import router from './router'
import store from 'store'
// import 'babel-polyfill'

Vue.config.productionTip = false
// Vue.use(Quasar) // Install Quasar Framework
// 使用Quasar组件
Vue.use(Quasar, {
  components: All,
  directives: All
})

Vue.use(BaiduMap, {
  ak: 'yIgGelNEPkCYX94v4hq8wP1364Btjta4'
})

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'
import './assets/styles/base.scss'
// 发布后是否显示提示
Vue.config.productionTip = false
// 是否开启工具调试
Vue.config.devtools = process.env.NODE_ENV === 'development'
import { Menu, MenuItem, Submenu } from 'element-ui'
const components = [Menu, MenuItem, Submenu]
components.forEach(item => {
  Vue.component(item.name, item)
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App').default)
  })
})
