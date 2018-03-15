export const searchQuery = state => {
  return state.q
}

export const routeQuery = (state, getters, rootState) => {
  return rootState.route.query.q || false
}

export const counters = state => {
  return state.counters
}

export const index = state => {
  return state.i
}

export const results = state => {
  return state.results
}
