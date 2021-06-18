import Repository from '@/api/core'

const BASE_URL = import.meta.env.VITE_MAIN_URL + '/listLang';

const fetch = (params) => {
  return Repository(BASE_URL).fetch(params)
}

const create = (params) => {
  return Repository(BASE_URL).create(params)
}

const update = (id, params) => {
  return Repository(BASE_URL).update(id, params)
}

const updateAll = (params) => {
  return Repository(BASE_URL).updateAll(params)
}

export default {
  fetch,
  create,
  update,
  updateAll
}