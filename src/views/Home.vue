<template>
  <div class="container">
    <HeroImg />
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
    <div class="section" v-if="false">
      <SectionTitle title="熱門打卡景點" link="/about" />
      <div class="row">
        <Card />
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
    getActivity() {
      const _params =
        '$filter=Picture/PictureUrl1 ne null&$orderby=StartTime desc&$top=4&$format=JSON'
      this.spot_getActivity(_params)
    },
    getFood() {
      const _params =
        '$filter=Picture/PictureUrl1 ne null&$orderby=UpdateTime desc&$top=4&$format=JSON'
      this.spot_getFood(_params)
    },
  },
  mounted() {
    this.getActivity()
    this.getFood()
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
  padding-bottom: 36px;
  & .row {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    @media (--pc-viewport) {
      justify-content: space-between;
    }
  }
  & .card {
    width: 22.97%;
  }
}
</style>
