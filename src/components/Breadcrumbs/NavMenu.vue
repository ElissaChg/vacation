<template>
  <router-link class="menu" :to="to">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    to: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.menu {
  display: inline;
  text-decoration: none;
  font-size: var(--text1);
  font-weight: 400;
  color: var(--green1);
  @media (--pc-viewport) {
    font-size: var(--text2);
  }
  &:hover {
    @media (hover: hover) {
      color: var(--green3);
    }
  }
  &:active {
    color: var(--green5);
  }
  &.router-link-active + .router-link-active {
    &:before {
      content: '/';
      color: var(--gray3);
      padding: 0px 6px;
      cursor: default;
      box-sizing: border-box;
    }
  }
  &.router-link-exact-active {
    color: var(--gray3);
    cursor: default;
  }
}
</style>
