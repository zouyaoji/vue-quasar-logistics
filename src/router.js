import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'

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
        faIcon: 'home',
        show: true,
        subLabel: ''
      },
      {
        path: '/service',
        name: '服务项目',
        component: load('pages/service/service'),
        faIcon: 'share',
        show: true,
        subLabel: ''
      },
      {
        path: '/about',
        name: '关于我们',
        component: load('pages/about/about'),
        faIcon: 'event note',
        show: true,
        subLabel: ''
      },
      {
        path: '/contact',
        name: '联系我们',
        component: load('pages/contact/contact'),
        faIcon: 'contact phone',
        show: true,
        sublabel: ''
      },
      {
        path: '/hr',
        name: '招贤纳士',
        component: load('pages/hr/hr'),
        faIcon: 'person add',
        show: true,
        subLabel: ''
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
  store.commit('setIsLoadingRoute', true)
  next()
})

// 路由完成之后的操作
router.afterEach((to, from) => {
  store.commit('setIsLoadingRoute', false)
})

export default router
