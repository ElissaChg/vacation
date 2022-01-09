<template>
  <div class="container">
    <HeroImg />
    <div class="section">
      <SectionTitle title="近期活動" link="/about" />
      <div class="row">
        <Activity
          v-for="activity in scenicSpot_activity"
          :key="activity.ActivityID"
          :item="activity"
        />
      </div>
    </div>
    <div class="section" v-if="false">
      <SectionTitle title="熱門打卡景點" link="/about" />
      <div class="row">
        <Card />
      </div>
    </div>
    <div class="section" v-if="false">
      <SectionTitle title="一在回訪美食" link="/about" />
      <div class="row">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import scenicSpotDelegate from '@/delegate/scenicSpotDelegate'
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
  mixins: [scenicSpotDelegate],
  mounted() {
    this.scenicSpot_getActivity(4)
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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (--pc-viewport) {
      justify-content: space-between;
    }
  }
}
</style>
