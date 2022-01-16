<template>
  <div class="pagination">
    <PageButton />
  </div>
</template>

<script>
import PageButton from './PageButton'

export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  components: {
    PageButton,
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.pagination {
}
</style>
