<template>
  <div class="detail" v-if="spot_foodDetail">
    <Breadcrumbs>
      <NavMenu :text="$t('components.nav.food')" to="/food" />
      <NavMenu :text="spot_foodDetail.RestaurantName" />
    </Breadcrumbs>
    <div class="section">
      <div
        class="photo"
        :style="{
          'background-image': `url('${img}')`,
        }"
        v-if="img"
      ></div>
      <h3 class="title">{{ spot_foodDetail.RestaurantName }}</h3>
      <div class="tagbox" v-if="spot_foodDetail.Class">
        <ClassTag>{{ `# ${spot_foodDetail.Class}` }}</ClassTag>
      </div>
      <div class="desc">
        <h4>餐廳介紹：</h4>
        <div>{{ spot_foodDetail.Description }}</div>
      </div>
      <div class="info">
        <div class="row" v-if="spot_foodDetail.OpenTime">
          <h4>營業時間：</h4>
          <div>{{ spot_foodDetail.OpenTime }}</div>
        </div>
        <div class="row">
          <h4>連絡電話：</h4>
          <div>{{ spot_foodDetail.Phone }}</div>
        </div>
        <div class="row">
          <h4>餐廳地址：</h4>
          <div>{{ spot_foodDetail.Address }}</div>
        </div>
        <div class="row" v-if="spot_foodDetail.ParkingInfo">
          <h4>停車資訊：</h4>
          <div>{{ spot_foodDetail.ParkingInfo }}</div>
        </div>
        <div class="row" v-if="spot_foodDetail.WebsiteUrl">
          <h4>官方網站：</h4>
          <a :href="spot_foodDetail.WebsiteUrl" target="_blank">{{
            spot_foodDetail.WebsiteUrl
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spotDelegate from '@/delegate/spotDelegate'
import Breadcrumbs from '@/components/Breadcrumbs'
import NavMenu from '@/components/Breadcrumbs/NavMenu'
import ClassTag from '@/components/ClassTag'

export default {
  name: 'FoodDetail',
  components: {
    Breadcrumbs,
    NavMenu,
    ClassTag,
  },
  mixins: [spotDelegate],
  data() {
    return {
      img: '',
    }
  },
  watch: {
    spot_foodDetail(val) {
      if (val && val.Picture && val.Picture.PictureUrl1) {
        const _img = new Image()
        _img.onload = () => {
          this.img = val.Picture.PictureUrl1
        }
        _img.onerror = () => {}
        _img.src = val.Picture.PictureUrl1
      } else {
        this.img = ''
      }
    },
  },
  mounted() {
    this.spot_foodId = this.$route.params.id
    this.spot_getFoodDetail()
  },
  beforeDestroy() {
    this.spot_foodId = ''
    this.spot_foodDetail = null
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.detail {
  @apply --container;
  @media (--pc-viewport) {
    padding: 0px 45px;
  }
}
.section {
  margin-bottom: 60px;
  & .photo {
    width: 100%;
    height: 185px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 24px;
    margin-bottom: 30px;
    @media (--pc-viewport) {
      height: 400px;
    }
  }
  & .title {
    font-size: var(--text6);
    font-weight: 300;
    color: var(--gray2);
    margin: 0px 0px 10px 0px;
    @media (--pc-viewport) {
      font-size: var(--text8);
      margin: 0px 0px 15px 0px;
    }
  }
  & h4 {
    font-size: var(--text3);
    font-weight: 700;
    color: var(--gray1);
    margin: 0px;
    white-space: nowrap;
    @media (--pc-viewport) {
      font-size: var(--text4);
    }
  }
  & .tagbox {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    @media (--pc-viewport) {
      margin-bottom: 30px;
    }
  }
  & .desc {
    font-size: var(--text2);
    line-height: 30px;
    font-weight: 300;
    color: var(--black);
    @apply --text-many;
    margin-bottom: 30px;
    @media (--pc-viewport) {
      font-size: var(--text3);
      margin-bottom: 60px;
    }
  }
  & .info {
    background-color: var(--gray6);
    font-size: var(--text3);
    line-height: 30px;
    font-weight: 400;
    border-radius: 12px;
    padding: 30px 18px;
    box-sizing: border-box;
    user-select: text;
    @apply --text-many;
    @media (--pc-viewport) {
      padding: 30px;
    }
    & .row {
      display: flex;
      & + .row {
        margin-top: 10px;
      }
      & a {
        color: var(--green1);
        &:hover {
          @media (hover: hover) {
            color: var(--green3);
          }
        }
      }
    }
  }
}
</style>
