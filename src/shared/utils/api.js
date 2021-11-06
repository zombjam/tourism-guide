import jsSHA from 'jssha'
import { AppID, AppKey } from 'apiConfig'

const getAuthorizationHeader = () => {
  const GMTString = new Date().toGMTString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
  return {
    Authorization,
    'X-Date': GMTString,
  }
}

const defaults = {
  baseUrl: 'https://ptx.transportdata.tw/MOTC/v2/Tourism',
  headers: () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...getAuthorizationHeader(),
  }),
}

const api = (method, url, variables) => {
  return new Promise((resolve, reject) => {
    fetch(`${defaults.baseUrl}${url}`, {
      headers: defaults.headers(),
      method,
      body: JSON.stringify(variables),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  })
}

export default {
  get: (...args) => api('GET', ...args),
}
