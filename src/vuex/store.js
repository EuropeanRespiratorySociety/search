
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import authentication from './modules/authentication/store'
import base from './modules/base/store'
import search from './modules/search/store'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  modules: {
    authentication,
    base,
    search
  },
  plugins: [vuexLocal.plugin]
})
