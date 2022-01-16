<template>
  <div
    class="search"
    :class="[disabled ? 'disabled' : '']"
    @pointerup.stop="onClick"
  >
    <Icon icon="i-search" color="#fff" size="30" />
    <span>{{ $t('components.searchBar.search') }}</span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'Search',
  props: {
    disabled: {
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
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: var(--text2);
  font-weight: 700;
  color: var(--white);
  background-color: var(--green3);
  border-radius: 6px;
  cursor: pointer;
  margin-top: 7px;
  @media (--pc-viewport) {
    margin-top: 0px;
  }
  &:hover {
    @media (hover: hover) {
      background-color: var(--green2);
    }
  }
  &:active {
    background-color: var(--green5);
  }
  &.disabled {
    background-color: var(--gray4);
    cursor: not-allowed;
  }
  & span {
    letter-spacing: 1rem;
    padding-left: 10px;
    box-sizing: border-box;
  }
}
</style>
