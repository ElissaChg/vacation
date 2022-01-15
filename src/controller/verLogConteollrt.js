export default {
  watch: {
    common_config(val) {
      if (val) {
        console.info(
          `%c${val.name} v${val.version}`,
          `background: #65895f; color: #fff`
        )
      }
    },
  },
}
