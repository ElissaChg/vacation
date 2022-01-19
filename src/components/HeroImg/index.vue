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
        <SelectUi :options="filterTypeOptions" v-model="searchType" />
        <input
          type="text"
          :placeholder="$t('components.searchBar.scenicSpot')"
          v-model.trim="searchKey"
        />
        <Search
          @on-click="
            $emit('on-click', {
              type: searchType,
              keyword: searchKey,
            })
          "
        />
      </div>
    </div>
    <div class="slider"></div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Search from '@/components/Search'
import SelectUi from '@/components/ui/SelectUi'
import { FILTER_TYPE } from '@/tools/searchType'

export default {
  name: 'HeroImg',
  components: {
    Icon,
    Search,
    SelectUi,
  },
  data() {
    return {
      searchType: 'scenicspot',
      searchKey: '',
    }
  },
  computed: {
    filterTypeOptions() {
      return FILTER_TYPE(this)
    },
  },
  beforeDestroy() {
    this.searchType = 'scenicspot'
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
  & .select-ui {
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
