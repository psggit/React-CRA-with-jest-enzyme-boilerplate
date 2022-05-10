import axios from 'axios'

function getHeaders(type) {
  const json_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  switch (type) {
    case "FormData":
      return Object.assign({}, { "Content-Type": "application/x-www-form-urlencoded" })
    default:
      return Object.assign({}, json_headers)
  }
}

export const service = (type) => { 
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: getHeaders(type),
    withCredentials: true
  })
}

