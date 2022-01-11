import Vue from 'vue'
import VueI18n from 'vue-i18n'
import tw from '@/locale/tw.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'tw',
  messages: {
    tw,
  },
})
