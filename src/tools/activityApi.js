import axios from 'axios'
// const TOURISM_SERVICE = 'https://ptx.transportdata.tw/MOTC/v2'

/**
 * 取得觀光活動資料
 */
export const apiGet_getActivity = () => {
  return axios.get(`/Tourism/Activity?$top=${top}&$format=JSON`)
}

/**
 * 取得指定縣市觀光活動資料
 */
export const apiGet_getCityActivity = (city) => {
  return axios.get(`/Tourism/Activity/${city}`)
}
