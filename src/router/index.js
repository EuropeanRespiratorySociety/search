import Vue from 'vue'
import Router from 'vue-router'
import SearchApp from '@/components/search/SearchApp'
import AuthApp from '@/components/authentication/AuthApp'
// import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'Home',
      component: SearchApp
    },
    {
      path: '/login',
      name: 'Login',
      component: AuthApp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: AuthApp
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   next(vm => {
//     const slug = store.getters.slug
//     vm.store.dispatch('setCategoryKey', slug)
//     vm.store.dispatch('setArticlesKey', slug)
//   })
// })

export default router
