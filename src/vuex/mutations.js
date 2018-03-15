import * as types from './mutation-types'

export default {
  [types.TOGGLE_DRAWER] (state) {
    state.drawer = !state.drawer
  },

  [types.SET_DRAWER] (state, data) {
    state.drawer = data
  },

  [types.SEARCH_RESULTS] (state, data) {
    state.search = Object.assign({}, state.search, { results: data.results })
  },

  [types.RESET_RESULTS] (state) {
    state.search.results = []
    state.search.counters = {
      all: 0,
      web: 0,
      journals: 0,
      congress: 0
    }
    state.search.q = ''
    state.search.i = 'all'
    state.pageNumber = 1
  },

  [types.SET_ACTIVE_TAB] (state, data) {
    state.search.i = data
  },

  [types.SET_COUNTERS] (state, data) {
    state.search.counters = {
      all: data.total || 0,
      web: data.aggs.web || 0,
      journals: data.aggs.journals || 0,
      congress: data.aggs.congress || 0
    }
  },

  [types.SET_QUERY] (state, data) {
    state.search.q = data
  },

  [types.SET_PAGE_NUMBER] (state, value) {
    state.pageNumber = value
  },

  [types.RESTORE_MUTATION] (state, data) {
    state.drawer = data.drawer
    state.pages = data.pages
    state.article = data.article
    state.pageNumber = data.pageNumber
  },

  [types.SET_ONLINE] (state) {
    state.offline = false
  },

  [types.SET_OFFLINE] (state) {
    state.offline = true
  }
}
