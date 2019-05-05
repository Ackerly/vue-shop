// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/mock/mock' // 模拟数据
import axios from 'axios' // axios http请求库
import {Input, Icon, Button, Carousel, CarouselItem, Row, Col} from 'element-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHome, faShoppingCart, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://api.com' // 设置默认请求的url
Vue.prototype.$http = axios

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
