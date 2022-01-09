import { apiGet_getActivity } from '@/tools/activityApi'

export default {
  namespaced: true,
  state: {
    activity: null /* 活動 */,
  },
  mutations: {
    activity(state, val) {
      state.activity = val
    },
  },
  actions: {
    getActivity({ commit, dispatch }, top) {
      dispatch('loading', true, { root: true })
      apiGet_getActivity(top)
        .then((res) => {
          if (res && res.data) {
            commit('activity', res.data)
          }
        })
        .catch((err) => {
          console.log(err || err.message, 'err')
        })
      dispatch('loading', false, { root: true })
    },
  },
}
