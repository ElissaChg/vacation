<template>
  <div class="heroimg">
    <div class="section">
      <div class="info">
        <h2>
          {{ $t('pages.home.slogan')[0]
          }}<span>{{ $t('pages.home.slogan')[1] }}</span>
          <div>{{ $t('pages.home.slogan')[2] }}</div>
        </h2>
        <h3>
          <Icon icon="i-spot" color="#E0DA48" size="24" />
          <span>{{ $t('pages.home.sloganTips') }}</span>
        </h3>
      </div>
      <div class="action">
        <div class="label">搜索景點</div>
        <input
          type="text"
          :placeholder="$t('components.searchBar.scenicSpot')"
        />
        <Search />
      </div>
    </div>
    <div class="slider"></div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Search from '@/components/Search'

export default {
  name: 'HeroImg',
  components: {
    Icon,
    Search,
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.heroimg {
  padding: 10px 0px 24px 0px;
  @media (--pc-viewport) {
    padding: 82px 0px 36px 0px;
  }
}
.section {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 36px;
  @media (--pc-viewport) {
    flex-direction: row;
    margin-bottom: 60px;
    padding: 0px 60px;
    box-sizing: border-box;
  }
}
.info {
  padding-bottom: 20px;
  @media (--pc-viewport) {
    flex: 0 0 480px;
    padding-bottom: 0px;
  }
  & h2 {
    font-size: var(--text7);
    font-weight: 300;
    color: var(--gray2);
    line-height: 40px;
    margin: 0px;
    padding-bottom: 14px;
    text-align: center;
    @media (--pc-viewport) {
      font-size: var(--text9);
      line-height: 70px;
      padding-bottom: 17px;
      text-align: left;
    }
    & span {
      border-bottom: 2px solid var(--green4);
    }
  }
  & h3 {
    display: flex;
    align-items: center;
    font-size: var(--text1);
    font-weight: 400;
    color: var(--gray3);
    margin: 0px;
    @media (--pc-viewport) {
      font-size: var(--text4);
    }
    & span {
      padding-left: 6px;
    }
  }
}
.action {
  max-width: 345px;
  width: 100%;
  @media (--pc-viewport) {
    margin-left: 35px;
    flex: 0 1 350px;
  }
  & .label {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: var(--text2);
    font-weight: 500;
    color: var(--green1);
    border: solid 1px var(--gray5);
    border-radius: 5px;
    padding: 0px 30px;
    box-sizing: border-box;
    margin-bottom: 7px;
  }
  & > input {
    width: 100%;
    @apply --input;
    @media (--pc-viewport) {
      margin-bottom: 7px;
    }
    &::placeholder {
      color: var(--gray4);
    }
  }
}
.slider {
  width: 100%;
  height: 185px;
  background-image: url('/img/ScenicSpotPicture.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 24px;
  @media (--pc-viewport) {
    height: 400px;
  }
}
</style>
