import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/SignIn.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./views/Editor.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('./views/Article.vue')
    }
  ]
})
