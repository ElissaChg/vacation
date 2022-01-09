import axios from 'axios'

export default {
  async created() {
    try {
      const res = await axios.get('/config')
      this.$store.commit('config', res.data)
    } catch (err) {
      console.log('config error')
    }
  },
}
