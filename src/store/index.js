import Vue from 'vue'
import Vuex from 'vuex'
import scenicSpot from '@/store/scenicSpot'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null /* 網站設定 */,
    loadingState: 1 /* loading 計數 loadingState > 0 => loading */,
  },
  mutations: {
    config(state, val) {
      state.config = val
    },
    loadingState(state, val) {
      state.loadingState = val
    },
  },
  getters: {
    isLoading({ loadingState }) {
      return loadingState > 0
    },
  },
  actions: {
    loading({ commit, state }, start) {
      commit('loadingState', state.loadingState + (start ? 1 : -1))
    },
  },
  modules: {
    scenicSpot,
  },
})
