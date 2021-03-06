import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
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
      name: 'createArticle',
      component: () => import('./pages/Editor'),
      meta: {
        authRequire: true
      }
    },
    {
      path: '/editor/:id',
      name: 'editArticle',
      component: () => import('./pages/article/EditArticle'),
      meta: {
        authRequire: true
      }
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('./pages/Profile')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('./pages/article/Article')
    },
    {
      path: '/articles',
      name: 'tagArticles',
      props: (route) => ({
        tag: route.query.tag
      }),
      component: () => import ('./pages/article/TagArticles')
    },
    {
      path: '/profile/:id/favorites',
      name: 'favorites',
      component: () => import ('./pages/article/FavoriteArticles')
    },
    {
      path: '/settings',
      name: 'settings',
      meta: {
        authRequire: true
      },
      component: () => import('./pages/Settings')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequire)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
      store.commit('message/ADD_MESSAGE', ['You need to login to continue!'])
      setTimeout(() => {
        store.commit('message/CLEAR_MESSAGE')
      }, 5000);
    } else {
      store.commit('message/CLEAR_MESSAGE')
      next()
    }
  } else {
    store.commit('message/CLEAR_MESSAGE')
    next()
  }
})

export default router
