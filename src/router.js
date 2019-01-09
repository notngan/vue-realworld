import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'

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
      path: '/feed',
      name: 'feed',
      component: () => import('./pages/MyFeed'),
      meta: {
        authRequire: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./pages/SignUp')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Login')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./pages/Editor')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('./pages/Profile')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('./pages/Article')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./pages/Settings')
    },
    {
      path: '/articles',
      name: 'filteredArticles',
      props: (route) => ({
        tag: route.query.tag,
        author: route.query.author,
        favorited: route.query.favorited
      }),
      component: () => import ('./pages/FilteredArticles')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequire)) {
    if (!localStorage.getItem('token')) {
      console.log(to)
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
