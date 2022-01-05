<template>
  <div class="header">
    <div class="container">
      <router-link to="/">
        <img src="/img/Logo-desktop.png" alt="" />
      </router-link>
      <div class="nav">
        <router-link to="/about">探索景點</router-link>
        <router-link to="/about">節慶活動</router-link>
        <router-link to="/about">品嘗美食</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.header {
  border-bottom: solid 1px var(--gray5);
  & .container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @apply --container;
  }
}
.nav {
  & a {
    display: inline-block;
    font-size: var(--text3);
    font-weight: 400;
    color: var(--gray3);
    text-decoration: none;
    transition: color 0.2s;
    & + a {
      margin-left: 20px;
    }
    &:hover {
      color: var(--green3);
    }
    &.router-link-exact-active {
      color: var(--green3);
    }
  }
}
</style>
