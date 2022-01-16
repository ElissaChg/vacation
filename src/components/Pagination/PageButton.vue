<template>
  <div class="button" :class="[disabled ? 'disabled' : '']">
    <Icon icon="i-arrow" color="#7f977b" />
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'PageButton',
  props: {
    icon: {
      type: String,
      default: '',
    },
    num: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Icon,
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--gray5);
  color: var(--gray3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.disabled {
    background-color: var(--gray5);
    color: var(--green2);
  }
}
</style>
