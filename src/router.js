import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'

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
      component: () => import('./pages/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./pages/SignIn.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./pages/Editor.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('./pages/Profile.vue')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('./pages/Article.vue')
    }
  ]
})
