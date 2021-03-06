import axios from 'axios'

export const HTTP = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://api.ernset.org'
    : 'http://localhost:3030'
})

export const sureThing = promise =>
  promise
    .then(data => ({
      ok: true,
      data
    }))
    .catch(error => ({
      ok: false,
      error: error.response.data
    }))
