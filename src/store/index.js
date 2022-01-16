import Vue from 'vue'
import Vuex from 'vuex'
import spot from '@/store/spot'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null /* 網站設定 */,
    loadingState: 1 /* loading 計數 loadingState > 0 => loading */,
    activeNav: false /* 導航側邊欄開關 */,
  },
  mutations: {
    config(state, val) {
      state.config = val
    },
    loadingState(state, val) {
      state.loadingState = val
    },
    activeNav(state, val) {
      state.activeNav = val
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
    spot,
  },
})
