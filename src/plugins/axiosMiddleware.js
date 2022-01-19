import axios from 'axios'
import jsSHA from 'jssha'

const getAuthHeader = () => {
  const _appId = '69178fbb2b24490cbb1153ecad098052'
  const _appKey = 'vKZbMU3_O6xzFDbGeUrzK-xiVyA'
  const _GMTString = new Date().toGMTString()
  const _shaObj = new jsSHA('SHA-1', 'TEXT')
  _shaObj.setHMACKey(_appKey, 'TEXT')
  _shaObj.update('x-date: ' + _GMTString)
  const _hmac = _shaObj.getHMAC('B64')
  const _authorization = `hmac username="${_appId}", algorithm="hmac-sha1", headers="x-date", signature="${_hmac}"`
  return { Authorization: _authorization, 'X-Date': _GMTString }
}

const ptxWeb = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2',
})

ptxWeb.interceptors.request.use((config) => {
  config.headers = getAuthHeader()
  return config
})

/**
 * 取得觀光活動資料
 */
export const apiGet_getActivity = (params) => {
  return ptxWeb.get(`/Tourism/Activity?${params}`)
}

/**
 * 取得指定縣市觀光活動資料
 */
export const apiGet_getActivityCity = (city, params) => {
  return ptxWeb.get(`/Tourism/Activity/${city}?${params}`)
}

/**
 * 取得觀光餐飲資料
 */
export const apiGet_getFood = (params) => {
  return ptxWeb.get(`/Tourism/Restaurant?${params}`)
}

/**
 * 取得指定縣市觀光餐飲資料
 */
export const apiGet_getFoodCity = (city, params) => {
  return ptxWeb.get(`/Tourism/Restaurant/${city}?${params}`)
}

/**
 * 取得觀光景點資料
 */
export const apiGet_getScenicSpot = (params) => {
  return ptxWeb.get(`/Tourism/ScenicSpot?${params}`)
}

/**
 * 取得指定縣市觀光景點資料
 */
export const apiGet_getScenicSpotCity = (city, params) => {
  return ptxWeb.get(`/Tourism/ScenicSpot/${city}?${params}`)
}
