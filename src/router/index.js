import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import nextTick from '@/components/nextTick'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/nextTick',
      name: 'nextTick',
      component: nextTick
    }
  ]
})
