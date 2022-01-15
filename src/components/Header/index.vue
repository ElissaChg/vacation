<template>
  <div class="header">
    <div class="box">
      <div class="left">
        <router-link to="/">
          <img class="desktop" src="/img/Logo-desktop.png" alt="" />
          <img class="mobile" src="/img/Logo-mobile.png" alt="" />
        </router-link>
        <div
          class="menu"
          :class="[common_activeNav ? 'active' : '']"
          @pointerup.stop="$emit('on-click')"
        >
          <div></div>
        </div>
      </div>
      <div class="nav" :class="[common_activeNav ? 'active' : '']">
        <!-- <router-link to="/about">{{ $t('components.nav.scenicSpot') }}</router-link> -->
        <router-link to="/activity">{{
          $t('components.nav.activity')
        }}</router-link>
        <!-- <router-link to="/about">{{ $t('components.nav.food') }}</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import commonDelegate from '@/delegate/commonDelegate'

export default {
  name: 'Header',
  mixins: [commonDelegate],
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.header {
  width: 100%;
  border-bottom: solid 1px var(--gray5);
  @media (--pc-viewport) {
  }
  & .box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @apply --container;
    @media (--pc-viewport) {
      flex-direction: row;
      height: 80px;
      padding: 0px 45px;
    }
  }
  & .left {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (--pc-viewport) {
      width: auto;
    }
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
    &:active {
      background-color: var(--green2);
    }
    &.active {
      & > div {
        background-color: transparent;
        &:before {
          width: 30px;
          transform: rotate(45deg) translate3d(6px, 6px, 0px);
        }
        &:after {
          width: 30px;
          transform: rotate(-45deg) translate3d(6px, -6px, 0px);
        }
      }
    }
    & > div {
      width: 30px;
      height: 2px;
      background-color: var(--white);
      margin-top: 14px;
      transition: background-color 0.2s;
      &:before {
        content: '';
        display: block;
        width: 22px;
        height: 2px;
        background-color: var(--white);
        position: absolute;
        top: 15px;
        right: 10px;
        transition: transform 0.2s;
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
        transition: transform 0.2s;
      }
    }
  }
}
.nav {
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  position: absolute;
  top: 64px;
  z-index: 1;
  border-bottom: solid 1px var(--gray5);
  @media (--pc-viewport) {
    width: auto;
    display: flex;
    flex-direction: row;
    border-bottom: none;
    position: relative;
    top: 0px;
  }
  &.active {
    display: flex;
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
      @media (hover: hover) {
        color: var(--green3);
      }
    }
    &:active {
      color: var(--gray2);
    }
    &.router-link-exact-active {
      color: var(--green3);
    }
  }
}
</style>
