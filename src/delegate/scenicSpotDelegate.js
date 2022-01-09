export default {
  computed: {
    scenicSpot_activity: {
      set(val) {
        this.$store.commit('scenicSpot/activity', val)
      },
      get() {
        return this.$store.state.scenicSpot.activity
      },
    },
  },
  methods: {
    scenicSpot_getActivity(top) {
      this.$store.dispatch('scenicSpot/getActivity', top)
    },
  },
}
