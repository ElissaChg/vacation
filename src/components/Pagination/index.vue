<template>
  <div class="pagination">
    <PageButton
      icon="i-left"
      :disabled="value === 1"
      @on-click="$emit('prev')"
    />
    <PageButton
      :num="idx + 1"
      :active="value === idx + 1"
      v-for="(item, idx) in page"
      :key="item"
      @on-click="$emit('input', item)"
    />
    <PageButton
      icon="i-right"
      :disabled="value === page"
      @on-click="$emit('next')"
    />
  </div>
</template>

<script>
import PageButton from './PageButton'

export default {
  name: 'Pagination',
  props: {
    value: {
      type: Number,
    },
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
    },
  },
  components: {
    PageButton,
  },
  data() {
    return {
      step: 3,
    }
  },
  computed: {
    page() {
      return Math.ceil(this.total / this.perPage)
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
}
</style>
