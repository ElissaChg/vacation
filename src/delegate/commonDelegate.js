export default {
  computed: {
    common_config() {
      return this.$store.state.config
    },
    common_isLoading() {
      return this.$store.getters.isLoading
    },
  },
  methods: {
    common_loading(val) {
      this.$store.dispatch('loading', val)
    },
  },
}
