import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

// 创建路由实例
export default createRouter({
  history: createWebHashHistory(), // 这里使用hash模式：createWebHashHistory，若使用history模式：createHistory
  // 编写路由表
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home, // 直接引入
    },
    {
      path: '/data',
      name: 'Data',
      // 按需引入，并且在webpack打包时起别名
      component: () => import(/* webpackChunkName: "data" */ '../views/Data'),
    },
    {
      path: '/user',
      name: 'User',
      component: () => import(/* webpackChunkName: "data" */ '../views/User'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "data" */ '../views/Login'),
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "data" */ '../views/Detail'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "data" */ '../views/About'),
    },
    {
      path: '/account',
      name: 'Account',
      component: () =>
        import(/* webpackChunkName: "data" */ '../views/Account'),
    },
  ],
})
