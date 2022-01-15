import {
  apiGet_getActivity,
  apiGet_getActivityCity,
} from '@/plugins/axiosMiddleware'

export default {
  namespaced: true,
  state: {
    topActivity: null /* 首頁活動 */,
    activity: null /* 活動 */,
  },
  mutations: {
    topActivity(state, val) {
      state.topActivity = val
    },
    activity(state, val) {
      state.activity = val
    },
  },
  actions: {
    getActivity({ commit, dispatch }, params) {
      dispatch('loading', true, { root: true })
      apiGet_getActivity(params)
        .then((res) => {
          if (res && res.data) {
            commit('topActivity', res.data)
          }
        })
        .catch((err) => {
          console.log(err || err.message, 'err')
        })
      dispatch('loading', false, { root: true })
    },
    getActivityCity({ commit, dispatch }, { city, params }) {
      dispatch('loading', true, { root: true })
      if (city === '') {
        apiGet_getActivity(params)
          .then((res) => {
            if (res && res.data) {
              console.log(res.data, 22)
              commit('activity', res.data)
            }
          })
          .catch((err) => {
            console.log(err || err.message, 'err')
          })
      } else {
        apiGet_getActivityCity(city, params)
          .then((res) => {
            if (res && res.data) {
              console.log(res.data, 33)
              commit('activity', res.data)
            }
          })
          .catch((err) => {
            console.log(err || err.message, 'err')
          })
      }
      dispatch('loading', false, { root: true })
    },
  },
}
