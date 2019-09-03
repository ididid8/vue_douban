import Vue from 'vue'
import Vuex from 'vuex'

import book from './modules/book'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
    user
  }
})