import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
const Home = () => import('@/views/Home')
const form = () => import('@/views/form')
const AddRule = () => import('@/views/AddRule')
const Check = () => import('@/views/Check')

Vue.use(Router)

export default new Router({
  mode: 'hash',//更改路由模式
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'AddRule',
          name: 'AddRule',
          component: AddRule
        },
        {
          path: 'Check',
          name: 'Check',
          component: Check
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/form',
      name: 'form',
      component: form
    }
  ]
})
