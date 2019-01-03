import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import store from './store/store'

Vue.use(Router)

const router = new Router({
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
      path: '/login',
      name: 'login',
      component: () => import('./pages/Login.vue')
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

router.beforeEach((to, from, next) => {
  store.dispatch('message/clearMessage')
  next()
})

export default router
