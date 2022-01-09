<template>
  <div id="app">
    <transition name="fade">
      <Header @open="openNav" v-if="!common_isLoading" />
    </transition>
    <transition name="fade">
      <router-view v-if="!common_isLoading" />
    </transition>
    <transition name="fade">
      <Footer v-if="!common_isLoading" />
    </transition>
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
    loadingController /* 全域 loading */,
  ],
  methods: {
    openNav() {
      this.common_activeNav = !this.common_activeNav
    },
  },
}
</script>
