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
    <div class="slider">
      <div class="p1"></div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Search from '@/components/SearchBar/Search'

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
  box-sizing: border-box;
  @media (--pc-viewport) {
    flex-direction: row;
    padding: 0px 95px 60px 95px;
  }
}
.info {
  padding-bottom: 35px;
  @media (--pc-viewport) {
    padding-bottom: 0px;
  }
  & h2 {
    font-size: var(--text7);
    font-weight: 300;
    color: var(--gray2);
    line-height: 40px;
    margin: 0px;
    padding-bottom: 14px;
    @media (--pc-viewport) {
      font-size: var(--text9);
      line-height: 70px;
      padding-bottom: 17px;
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
  padding-bottom: 38px;
  @media (--pc-viewport) {
    padding-bottom: 0px;
  }
  & .label {
    width: 350px;
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
    width: 350px;
    @apply --input;
    &::placeholder {
      color: var(--gray4);
    }
  }
}
.slider {
  width: 100%;
  height: 400px;
  background-image: url('https://fakeimg.pl/1920x1080/');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 24px;
}
</style>
