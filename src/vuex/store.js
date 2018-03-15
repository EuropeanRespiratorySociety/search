
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  actions,
  getters,
  state: {
    drawer: false,
    results: [],
    search: {
      counters: {
        all: 0,
        web: 0,
        journals: 0,
        congress: 0
      },
      q: '',
      i: 'all'
    },
    pageNumber: 1,
    skip: 0,
    limit: 10,
    length: 0,
    offline: false
  },
  mutations: mutations.default,
  plugins: [vuexLocal.plugin]
})
