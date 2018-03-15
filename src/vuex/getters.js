export const searchQuery = state => {
  return state.search.q
}

export const routeQuery = state => {
  return state.route.query.q || false
}

export const counters = state => {
  return state.search.counters
}

export const index = state => {
  return state.search.i
}

export const results = state => {
  return state.search.results
}
