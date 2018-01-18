import Vue from 'vue'
import VueRouter from 'vue-router'
import { Events } from 'quasar'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

let routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    component: load('index'),
    show: true,
    children: [
      {
        path: '/home',
        name: '网站首页',
        component: load('pages/home/home'),
        faIcon: 'fa-home',
        show: true,
        subLabel: ''
      },
      {
        path: '/service',
        name: '服务项目',
        component: load('pages/Hello'),
        faIcon: 'fa-home',
        show: true,
        subLabel: ''
      },
      {
        path: '/about',
        name: '关于我们',
        component: load('pages/about/about'),
        faIcon: 'fa-home',
        show: true,
        subLabel: ''
      },
      {
        path: '/',
        name: '我的工作台',
        component: load('pages/Hello'),
        faIcon: 'fa-money',
        show: true,
        sublabel: 'myDemo',
        children: [
          { path: '/2-1', component: load('pages/Hello'), faIcon: 'record_voice_over', name: '选项1', show: true, sublabel: 'myDemo' },
          { path: '/2-2', component: load('pages/Hello'), faIcon: 'record_voice_over', name: '选项2', show: true, sublabel: 'myDemo' },
          { path: '/2-3', component: load('pages/Hello'), faIcon: 'record_voice_over', name: '选项3', show: true, sublabel: 'myDemo' }
        ]
      }
    ]
  },

  // Always leave this last one
  { path: '*', component: load('pages/404/Error404') } // Not found
]

const router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// 全局路由配置
// 路由开始之前的操作
router.beforeEach((to, from, next) => {
  // NProgress.done().start()
  Events.$emit('loadingRoute', true)
  next()
})

// 路由完成之后的操作
router.afterEach((to, from) => {
  Events.$emit('loadingRoute', false)
})

export default router
