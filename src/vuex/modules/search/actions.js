import * as types from './mutation-types'
import { HTTP } from '@/helpers/http'
import router from '@/router'

export const searchAll = async ({ commit, dispatch, state }, query = null, type = null) => {
  const page = state.pageNumber
  const q = query || state.q
  const t = type || state.i
  const qs = setRoute(q, t, page)
  const results = await HTTP.get(`/search${qs}`)
  commit(types.SEARCH_RESULTS, results.data, (err) => { console.log(err) })
  commit(types.SET_QUERY, q)
  if (query) dispatch('getAggregations')
}

export const getAggregations = async ({ commit, state }) => {
  const query = state.q
  const qs = setRoute(query, null, null, true)
  const results = await HTTP.get(`/search${qs}`)
  commit(types.SET_COUNTERS, results.data, (err) => { console.log(err) })
}

export const resetResults = ({ commit }) => {
  router.replace({ query: {} })
  commit(types.RESET_RESULTS)
}

export const setActiveTab = async ({ commit, dispatch }, data) => {
  if (data.length > 0) commit(types.SET_ACTIVE_TAB, data, (err) => { console.log(err) })
  dispatch('setPageNumber', 1)
}

export const setQuery = async ({ commit }, query) => {
  commit(types.SET_QUERY, query, (err) => { console.log(err) })
}

export const setPageNumber = ({ commit }, payload) => {
  commit(types.SET_PAGE_NUMBER, payload, (err) => { console.log(err) })
}

function setRoute (query, type = null, page = 1, aggs = false, limit = 10) {
  const params = { query: { q: query } }
  let string = `?q=${query}`
  if (type) {
    // params.query = Object.assign({}, params.query, { i: type })
    string += `&i=${type}`
  }

  if (page > 1) {
    // params.query.p = page
    string += `&s=${(page - 1) * limit}`
  }

  if (limit !== 10) string += `&l=${limit}`
  if (aggs) string += '&a=true'

  if (!aggs) router.push(params)
  return string
}
