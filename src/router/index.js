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
import DetailView from '../views/DetailView'
import RegisterView from '../views/RegisterView'


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
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    }, {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: PagesView,
        subject: SubjectView
      }
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: PagesView,
        search: SearchView
      }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})