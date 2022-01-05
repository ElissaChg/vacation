<template>
  <div class="location">{{ text }}</div>
</template>

<script>
export default {
  name: 'Location',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.location {
  display: flex;
  align-items: center;
  &:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 16px;
    background: url('/img/i-location.png') no-repeat top left;
    margin-right: 6px;
  }
}
</style>
