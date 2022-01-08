<template>
  <div class="container">
    <HeroImg />
    <div class="section">
      <SectionTitle title="近期活動" link="/about" />
      <div class="row">
        <Activity />
      </div>
    </div>
    <div class="section">
      <SectionTitle title="熱門打卡景點" link="/about" />
      <div class="row">
        <Card />
      </div>
    </div>
    <div class="section">
      <SectionTitle title="一在回訪美食" link="/about" />
      <div class="row">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
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
    @media (--pc-viewport) {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
