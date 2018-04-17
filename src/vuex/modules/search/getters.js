export const searchQuery = state => state.q

export const routeQuery = (state, getters, rootState) => rootState.route.query.q || false

export const counters = state => state.counters

export const index = state => state.i

export const results = state => state.results
