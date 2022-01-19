export default {
  computed: {
    spot_topActivity: {
      set(val) {
        this.$store.commit('spot/topActivity', val)
      },
      get() {
        return this.$store.state.spot.topActivity
      },
    },
    spot_activity: {
      set(val) {
        this.$store.commit('spot/activity', val)
      },
      get() {
        return this.$store.state.spot.activity
      },
    },
    spot_activityDetail: {
      set(val) {
        this.$store.commit('spot/activityDetail', val)
      },
      get() {
        return this.$store.state.spot.activityDetail
      },
    },
    spot_activityId: {
      set(val) {
        this.$store.commit('spot/activityId', val)
      },
      get() {
        return this.$store.state.spot.activityId
      },
    },
    spot_topFood: {
      set(val) {
        this.$store.commit('spot/topFood', val)
      },
      get() {
        return this.$store.state.spot.topFood
      },
    },
    spot_food: {
      set(val) {
        this.$store.commit('spot/food', val)
      },
      get() {
        return this.$store.state.spot.food
      },
    },
    spot_foodDetail: {
      set(val) {
        this.$store.commit('spot/foodDetail', val)
      },
      get() {
        return this.$store.state.spot.foodDetail
      },
    },
    spot_foodId: {
      set(val) {
        this.$store.commit('spot/foodId', val)
      },
      get() {
        return this.$store.state.spot.foodId
      },
    },
    spot_topScenicSpot: {
      set(val) {
        this.$store.commit('spot/topScenicSpot', val)
      },
      get() {
        return this.$store.state.spot.topScenicSpot
      },
    },
    spot_scenicSpot: {
      set(val) {
        this.$store.commit('spot/scenicSpot', val)
      },
      get() {
        return this.$store.state.spot.scenicSpot
      },
    },
    spot_scenicSpotDetail: {
      set(val) {
        this.$store.commit('spot/scenicSpotDetail', val)
      },
      get() {
        return this.$store.state.spot.scenicSpotDetail
      },
    },
    spot_scenicSpotId: {
      set(val) {
        this.$store.commit('spot/scenicSpotId', val)
      },
      get() {
        return this.$store.state.spot.scenicSpotId
      },
    },
  },
  methods: {
    spot_getActivity(params) {
      this.$store.dispatch('spot/getActivity', params)
    },
    spot_getActivityCity(city, params) {
      this.$store.dispatch('spot/getActivityCity', { city, params })
    },
    spot_getActivityDetail() {
      this.$store.dispatch('spot/getActivityDetail')
    },
    spot_getFood(params) {
      this.$store.dispatch('spot/getFood', params)
    },
    spot_getFoodCity(city, params) {
      this.$store.dispatch('spot/getFoodCity', { city, params })
    },
    spot_getFoodDetail() {
      this.$store.dispatch('spot/getFoodDetail')
    },
    spot_getScenicSpot(params) {
      this.$store.dispatch('spot/getScenicSpot', params)
    },
    spot_getScenicSpotCity(city, params) {
      this.$store.dispatch('spot/getScenicSpotCity', { city, params })
    },
    spot_getScenicSpotDetail() {
      this.$store.dispatch('spot/getScenicSpotDetail')
    },
  },
}
