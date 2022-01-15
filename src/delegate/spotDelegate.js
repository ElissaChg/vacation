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
  },
  methods: {
    spot_getActivity(params) {
      this.$store.dispatch('spot/getActivity', params)
    },
    spot_getActivityCity(city, params) {
      this.$store.dispatch('spot/getActivityCity', { city, params })
    },
  },
}
