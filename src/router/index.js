import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/Index'
import login from '@/view/Login'
import user from '@/view/User'
import category from '@/view/Category'
import categoryMain from '@/components/category/Main'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/category',
    name: 'category',
    redirect: '/category/all',
    component: category,
    children: [{
      path: '/category/:tab',
      component: categoryMain
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录才能进入的
    }
  }
  ]
})
