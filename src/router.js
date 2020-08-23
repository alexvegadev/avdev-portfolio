import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nfound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
  ]
})
