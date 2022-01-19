<template>
  <div class="container">
    <HeroImg @on-click="search" />
    <div class="section">
      <SectionTitle title="近期活動" link="/activity" />
      <div class="row">
        <Activity
          v-for="item in spot_topActivity"
          :key="item.ActivityID"
          :item="item"
          :link="{
            name: 'ActivityDetail',
            params: { id: item.ActivityID },
          }"
        />
      </div>
    </div>
    <div class="section">
      <SectionTitle title="熱門打卡景點" link="/scenicspot" />
      <div class="row">
        <Card
          v-for="item in spot_topScenicSpot"
          :key="item.ScenicSpotID"
          :item="item"
          :text="item.ScenicSpotName"
          :link="{
            name: 'ScenicSpotDetail',
            params: { id: item.ScenicSpotID },
          }"
        />
      </div>
    </div>
    <div class="section">
      <SectionTitle title="一在回訪美食" link="/food" />
      <div class="row">
        <Card
          v-for="item in spot_topFood"
          :key="item.RestaurantID"
          :item="item"
          :text="item.RestaurantName"
          :link="{
            name: 'FoodDetail',
            params: { id: item.RestaurantID },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import spotDelegate from '@/delegate/spotDelegate'
import HeroImg from '@/components/HeroImg'
import SectionTitle from '@/components/SectionTitle'
import Activity from '@/components/Activity'
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    HeroImg,
    SectionTitle,
    Activity,
    Card,
  },
  mixins: [spotDelegate],
  methods: {
    getScenicSpot() {
      const _params = `$filter=City ne null and Picture/PictureUrl1 ne null&$orderby=UpdateTime desc&$top=4&$format=JSON`
      this.spot_getScenicSpot(_params)
    },
    getActivity() {
      const _month = new Date().getMonth() + 1
      const _day = new Date().getDate()
      const _params = `$filter=day(StartTime) ge ${_day} and (month(StartTime) eq ${_month} or month(StartTime) eq ${
        _month + 1
      }) and Picture/PictureUrl1 ne null&$orderby=StartTime asc&$top=4&$format=JSON`
      this.spot_getActivity(_params)
    },
    getFood() {
      const _params = `$filter=City ne null and Picture/PictureUrl1 ne null&$orderby=UpdateTime desc&$top=4&$format=JSON`
      this.spot_getFood(_params)
    },
    search(val) {
      this.spot_topSearchKey = val.keyword
      this.$router.push(`/${val.type}`)
    },
  },
  mounted() {
    this.getActivity()
    this.getFood()
    this.getScenicSpot()
  },
  beforeDestroy() {
    this.spot_topSearchKey = ''
  },
}
</script>
<style lang="postcss" scoped>
@import 'val.postcss';
.container {
  @apply --container;
  @media (--pc-viewport) {
    padding: 0px 45px;
  }
}
.section {
  margin-bottom: 36px;
  & .row {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  & .card {
    width: 48.64%;
    margin-bottom: 16px;
    @media (--pc-viewport) {
      width: 22.97%;
      margin-bottom: 0px;
    }
  }
}
</style>
