import axios from 'axios'
const credentials = {
  accessToken: "zMnppWFMfcgjvcwXqrTGkXSbPKNHRxxt"
}

const Repository = BASE_URL => ({
  fetch: (params, option) =>
    axios.get(
      BASE_URL,
      { params: { ...params } },
      option
    ),
  fetchOne: (id, option) => 
    axios.get(
      BASE_URL + `/${id}`,
      option
    ),
  create: (params, options) =>
    axios.post(
      BASE_URL,
      { ...params },
      {
        headers: {
          "Content-type": "application/json"
          // "Authorization": credentials.accessToken
        }
      },
      options
    ),
  update: (id, params, option) =>
    axios.patch(
      BASE_URL + `/${id}`,
      params,
      {
        headers: {
          "Content-type": "application/json"
          // "Authorization": credentials.accessToken
          // "Authorization": Bearer <token>
        }
      },
      option
    ),
  updateAll: (params, option) =>
    axios.put(
      BASE_URL + `/`,
      params,
      {
        headers: {
          "Content-type": "application/json"
          // "Authorization": credentials.accessToken
          // "Authorization": Bearer <token>
        }
      },
      option
    ),
  
  delete: (id, option) =>
    axios.delete(
      BASE_URL + `/${id}`,
      {
        headers: {
          "Content-type": "application/json"
          // "Authorization": credentials.accessToken
        }
      },
      option
    ),
});

export default Repository