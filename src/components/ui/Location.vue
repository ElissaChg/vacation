<template>
  <div class="location">
    <Icon class="icon" icon="i-spot" color="#646464" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'Location',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  components: {
    Icon,
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.location {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: var(--text2);
  font-weight: 400;
  color: var(--gray3);
  & .icon {
    display: none;
    @media (--pc-viewport) {
      display: block;
    }
  }
  & span {
    width: 100%;
    font-size: var(--text1);
    @apply --text-break;
    @media (--pc-viewport) {
      width: calc(100% - 20px);
      font-size: var(--text2);
      padding-left: 4px;
    }
  }
}
</style>
