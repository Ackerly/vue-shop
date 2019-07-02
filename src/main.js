// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload' // 懒加载
import store from '@/vuex/store.js' // vuex
import api from '@/http/api.js' // http请求
import '@/http/mock' // 模拟数据
import {
  Input,
  Icon,
  Button,
  Carousel,
  CarouselItem,
  Row,
  Col,
  Message
} from 'element-ui'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faHome,
  faShoppingCart,
  faThLarge,
  faUserCircle,
  faTools,
  faWallet,
  faTruckMoving,
  faCrown,
  faGem,
  faCog,
  faQrcode
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$message = Message

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.use(Input)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)

// 图标库
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUser)
library.add(faHome)
library.add(faShoppingCart)
library.add(faThLarge)
library.add(faUserCircle)
library.add(faTools)
library.add(faTruckMoving)
library.add(faWallet)
library.add(faCrown)
library.add(faGem)
library.add(faCog)
library.add(faQrcode)

// 用钩子函数beforeEach()对路由进行判断

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 需要权限,进一步进行判断
    if (store.state.login.token) { // 通过vuex state获取当前的token是否存在
      next()
    } else { // 如果没有权限,重定向到登录页,进行登录
      next({
        path: 'login'
        // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else { // 不需要权限 直接跳转
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
