import * as types from './mutation-types'

export default {
  [types.SEARCH_RESULTS] (state, data) {
    state.results = data.results
  },

  [types.RESET_RESULTS] (state) {
    state.results = []
    state.counters = {
      all: 0,
      web: 0,
      journals: 0,
      congress: 0
    }
    state.q = ''
    state.i = 'all'
    state.pageNumber = 1
  },

  [types.SET_ACTIVE_TAB] (state, data) {
    state.i = data
  },

  [types.SET_COUNTERS] (state, data) {
    state.counters = {
      all: data.total || 0,
      web: data.aggs.web || 0,
      journals: data.aggs.journals || 0,
      congress: data.aggs.congress || 0
    }
  },

  [types.SET_QUERY] (state, data) {
    state.q = data
  },

  [types.SET_PAGE_NUMBER] (state, value) {
    state.pageNumber = value
  }
}
