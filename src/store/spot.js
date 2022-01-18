import {
  apiGet_getActivity,
  apiGet_getActivityCity,
  apiGet_getFood,
  apiGet_getFoodCity,
} from '@/plugins/axiosMiddleware'

export default {
  namespaced: true,
  state: {
    topActivity: null /* 首頁活動 */,
    activity: null /* 活動 */,
    activityDetail: null /* 活動詳情 */,
    activityId: '' /* 當前查看的活動id */,
    topFood: null /* 首頁餐廳 */,
    food: null /* 餐廳 */,
    foodDetail: null /* 餐廳詳情 */,
    foodId: '' /* 當前查看的餐廳id */,
  },
  mutations: {
    topActivity(state, val) {
      state.topActivity = val
    },
    activity(state, val) {
      state.activity = val
    },
    activityDetail(state, val) {
      state.activityDetail = val
    },
    activityId(state, val) {
      state.activityId = val
    },
    topFood(state, val) {
      state.topFood = val
    },
    food(state, val) {
      state.food = val
    },
    foodDetail(state, val) {
      state.foodDetail = val
    },
    foodId(state, val) {
      state.foodId = val
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
              commit('activity', res.data)
            }
          })
          .catch((err) => {
            console.log(err || err.message, 'err')
          })
      }
      dispatch('loading', false, { root: true })
    },
    getActivityDetail({ commit, dispatch, state }) {
      dispatch('loading', true, { root: true })
      const _params = `$filter=contains(ActivityID,'${state.activityId}')&$format=JSON`
      apiGet_getActivity(_params)
        .then((res) => {
          if (res && res.data) {
            commit('activityDetail', res.data[0])
          }
        })
        .catch((err) => {
          console.log(err || err.message, 'err')
        })
      dispatch('loading', false, { root: true })
    },
    getFood({ commit, dispatch }, params) {
      dispatch('loading', true, { root: true })
      apiGet_getFood(params)
        .then((res) => {
          if (res && res.data) {
            commit('topFood', res.data)
          }
        })
        .catch((err) => {
          console.log(err || err.message, 'err')
        })
      dispatch('loading', false, { root: true })
    },
    getFoodCity({ commit, dispatch }, { city, params }) {
      dispatch('loading', true, { root: true })
      if (city === '') {
        apiGet_getFood(params)
          .then((res) => {
            if (res && res.data) {
              commit('food', res.data)
            }
          })
          .catch((err) => {
            console.log(err || err.message, 'err')
          })
      } else {
        apiGet_getFoodCity(city, params)
          .then((res) => {
            if (res && res.data) {
              commit('food', res.data)
            }
          })
          .catch((err) => {
            console.log(err || err.message, 'err')
          })
      }
      dispatch('loading', false, { root: true })
    },
    getFoodDetail({ commit, dispatch, state }) {
      dispatch('loading', true, { root: true })
      const _params = `$filter=contains(RestaurantID,'${state.activityId}')&$format=JSON`
      apiGet_getFood(_params)
        .then((res) => {
          if (res && res.data) {
            commit('foodDetail', res.data[0])
          }
        })
        .catch((err) => {
          console.log(err || err.message, 'err')
        })
      dispatch('loading', false, { root: true })
    },
  },
}
