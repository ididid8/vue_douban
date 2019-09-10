import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView.vue'
import BookView from '../views/BookView'
import HomeView from '../views/HomeView'
import MovieView from '../views/MovieView'
import StatusView from '../views/StatusView'
import SubjectView from '../views/SubjectView'
import GroupView from '../views/GroupView'
import LoginView from '../views/LoginView'
import SearchView from '../views/SearchView'


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
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        }
      ]
    }
  ]
})