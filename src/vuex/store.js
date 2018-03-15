
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

// import * as actions from './actions'
// import * as mutations from './mutations'
// import * as getters from './getters'

import search from './modules/search/store'
import base from './modules/base/store'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  modules: {
    search: search,
    base: base
  },
  plugins: [vuexLocal.plugin]
})
