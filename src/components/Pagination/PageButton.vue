<template>
  <div
    class="button"
    :class="[disabled ? 'disabled' : '', active ? 'active' : '']"
    @pointerup.stop="onClick"
  >
    <Icon :icon="icon" size="22" color="#7f977b" v-if="icon" />
    <template v-else>{{ num }}</template>
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
  methods: {
    onClick() {
      if (this.disabled) return
      this.$emit('on-click')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.button {
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  border: 1px solid var(--gray5);
  font-size: var(--text1);
  font-weight: 700;
  color: var(--gray3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 8px;
  &:hover {
    @media (hover: hover) {
      border-color: var(--gray4);
    }
  }
  &:active {
    background-color: var(--gray5);
  }
  & + .button {
    margin-left: 8px;
  }
  &.active {
    border-color: var(--green2);
    color: var(--green2);
  }
  &.disabled {
    background-color: var(--gray5);
    border-color: var(--gray5);
    color: var(--green2);
    cursor: not-allowed;
  }
}
</style>
