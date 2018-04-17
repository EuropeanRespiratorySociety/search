export const isAuthenticated = state => state.token !== null

export const person = state => state.person

export const user = state => state.user.data

export const name = (state) => {
  const { Title, FirstName, LastName } = state.user.data
  return Title || FirstName || LastName
    ? [Title, FirstName, LastName].filter(i => i !== undefined).join(' ')
    : false
}

export const street = (state) => {
  const {
    MainStreet1, MainStreet2, MainStreet3, MainStreet4
  } = state.user.data
  return MainStreet1 || MainStreet2 || MainStreet3 || MainStreet4
    ? [MainStreet1, MainStreet2, MainStreet3, MainStreet4].filter(i => i !== undefined).join(', ')
    : ''
}

export const error = state => state.error
