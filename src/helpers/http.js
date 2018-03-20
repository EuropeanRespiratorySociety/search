import axios from 'axios'

export const HTTP = axios.create({
  baseURL: process.env.apiUrl
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
