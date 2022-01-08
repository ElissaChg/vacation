<template>
  <div id="app">
    <Header v-if="!common_isLoading" />
    <router-view v-if="!common_isLoading" />
    <Footer v-if="!common_isLoading" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import commonDelegate from '@/delegate/commonDelegate'
import initConfigController from '@/controller/initConfigController'
import verLogConteollrt from '@/controller/verLogConteollrt'
import loadingController from '@/controller/loadingController'

export default {
  components: {
    Header,
    Footer,
  },
  mixins: [
    commonDelegate,
    initConfigController /* 網站設定 */,
    verLogConteollrt /* 版號 */,
    loadingController,
  ],
}
</script>
