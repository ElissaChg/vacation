<template>
  <div class="breadcrumbs">
    <NavMenu :text="$t('components.breadcrumbs.root')" to="/" />
    <slot />
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'

export default {
  name: 'Breadcrumbs',
  props: {
    root: {
      type: String,
      default: '',
    },
  },
  components: {
    NavMenu,
  },
}
</script>

<style lang="postcss" scoped>
.breadcrumbs {
  padding: 24px 0px 16px 0px;
  @media (--pc-viewport) {
    padding: 60px 0px 40px 0px;
  }
}
</style>
