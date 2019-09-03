import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView.vue'
import BookView from '../views/BookView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        }
      ]
    }
  ]
})