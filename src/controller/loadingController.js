export default {
  watch: {
    common_isLoading(val) {
      if (val) {
        document.getElementById('loading').style.display = 'flex'
      } else {
        document.getElementById('loading').style.display = 'none'
      }
    },
    common_config(val) {
      if (val) {
        this.common_loading(false)
      }
    },
  },
}
