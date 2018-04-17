import { HTTP, sureThing } from '@/helpers/http'
import * as types from './mutation-types'

// export const authenticate = ({ commit }) => {

// };

// Login user with email / password
export const login = async ({ commit }, payload) => {
  // HTTP
  //   .post('/ers/contacts/login', payload)
  //   .then(result => {
  //     commit(types.LOGIN, result.data.accessToken)
  //     commit(types.SET_USER, result.data)
  //   })
  //   .catch(e => {
  //     commit(types.SET_ERROR, e.response.data.errors)
  //   })
  const { ok, data, error } = await sureThing(HTTP.post('/ers/contacts/login', payload))
  // eslint-disable-next-line
  ok
    ? (
        commit(types.LOGIN, data.data.accessToken), // eslint-disable-line
        commit(types.SET_USER, data.data) // eslint-disable-line
      ) // eslint-disable-line
    : commit(types.SET_ERROR, error)
}

// Logout user
export const logout = ({ commit }) => {
  commit(types.LOGOUT)
}
