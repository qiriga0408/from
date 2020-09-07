import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
const Home = ()=>import('@/views/Home')
// const About= ()=>import('@/views/About')
const form =()=>import('@/views/form')
const Select =()=>import('@/views/Select')

Vue.use(Router)

export default new Router({
  mode: 'hash',//更改路由模式
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path:'/Select',
      name:'Select',
      component:Select
    }
  ]
})