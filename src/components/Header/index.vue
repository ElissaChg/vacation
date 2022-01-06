<template>
  <div class="header">
    <div class="left">
      <router-link to="/">
        <img class="desktop" src="/img/Logo-desktop.png" alt="" />
        <img class="mobile" src="/img/Logo-mobile.png" alt="" />
      </router-link>
      <div class="menu"><div></div></div>
    </div>
    <div class="nav">
      <router-link to="/about">探索景點</router-link>
      <router-link to="/about">節慶活動</router-link>
      <router-link to="/about">品嘗美食</router-link>
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
  width: 100%;
  height: 64px;
  border-bottom: solid 1px var(--gray5);
  max-width: 1200px;
  margin: 0px auto;
  box-sizing: border-box;
  @media (--pc-viewport) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0px 45px;
  }
  & .left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  & .desktop {
    display: none;
    @media (--pc-viewport) {
      display: block;
    }
  }
  & .mobile {
    display: block;
    @media (--pc-viewport) {
      display: none;
    }
  }
  & .menu {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 50px;
    height: 50px;
    background-color: var(--green3);
    border-radius: 12px;
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    @media (--pc-viewport) {
      display: none;
    }
    & > div {
      width: 30px;
      height: 2px;
      background-color: var(--white);
      margin-top: 14px;
      &:before {
        content: '';
        display: block;
        width: 22px;
        height: 2px;
        background-color: var(--white);
        position: absolute;
        top: 15px;
        right: 10px;
      }
      &:after {
        content: '';
        display: block;
        width: 22px;
        height: 2px;
        background-color: var(--white);
        position: absolute;
        bottom: 15px;
        right: 10px;
      }
    }
  }
}
.nav {
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  position: relative;
  z-index: 1;
  @media (--pc-viewport) {
    flex-direction: row;
  }
  & a {
    display: block;
    font-size: var(--text4);
    font-weight: 400;
    color: var(--gray3);
    text-decoration: none;
    padding: 24px 0px;
    transition: color 0.2s;
    @media (--pc-viewport) {
      font-size: var(--text3);
    }
    & + a {
      @media (--pc-viewport) {
        margin-left: 20px;
      }
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
