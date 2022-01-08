<template>
  <div class="activity">
    <div class="photo">
      <img src="https://fakeimg.pl/160x160/" alt="" />
    </div>
    <div class="info">
      <div class="time">2021/10/30 - 2021/11/13</div>
      <div class="title">2021 日月潭花火音樂嘉年華</div>
      <div class="bottom">
        <Location text="南投縣" />
        <router-link :to="link">
          <span>詳細介紹</span>
          <Icon icon="i-arrow" color="#7f977b" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Location from '@/components/ui/Location'

export default {
  name: 'Activity',
  props: {
    img: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  components: {
    Icon,
    Location,
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.activity {
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background-color: var(--gray6);
  border: 1px solid var(--gray5);
  box-sizing: border-box;
  @media (--pc-viewport) {
    width: 48.6%;
    height: 160px;
  }
  & .photo {
    width: 90px;
    height: 62px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    overflow: hidden;
    @media (--pc-viewport) {
      width: 160px;
      height: 160px;
    }
  }
  & .info {
    width: calc(100% - 90px);
    padding: 0px 16px;
    box-sizing: border-box;
    @media (--pc-viewport) {
      width: calc(100% - 160px);
      padding: 16px 30px;
    }
    & .time {
      font-size: var(--text1);
      font-weight: 400;
      color: var(--gray3);
      padding-bottom: 3px;
      @media (--pc-viewport) {
        font-size: var(--text2);
      }
    }
    & .title {
      font-size: var(--text2);
      font-weight: 700;
      color: var(--gray1);
      @media (--pc-viewport) {
        height: 60px;
        overflow: hidden;
        font-size: var(--text5);
        line-height: 30px;
      }
    }
    & .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--text2);
      font-weight: 400;
      color: var(--gray3);
    }
    & a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-weight: 500;
      color: var(--green3);
      & span {
        padding-right: 3px;
      }
    }
  }
}
</style>
