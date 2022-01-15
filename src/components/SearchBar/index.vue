<template>
  <div class="searchbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.searchbar {
  display: flex;
}
</style>
