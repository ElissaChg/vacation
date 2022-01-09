export default {
  computed: {
    common_config() {
      return this.$store.state.config
    },
    common_isLoading() {
      return this.$store.getters.isLoading
    },
    common_activeNav: {
      set(val) {
        this.$store.commit('activeNav', val)
      },
      get() {
        return this.$store.state.activeNav
      },
    },
  },
  methods: {
    common_loading(val) {
      this.$store.dispatch('loading', val)
    },
  },
}
