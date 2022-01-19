<template>
  <div class="detail" v-if="spot_scenicSpotDetail">
    <Breadcrumbs>
      <NavMenu :text="$t('components.nav.scenicSpot')" to="/scenicspot" />
      <NavMenu :text="spot_scenicSpotDetail.ScenicSpotName" />
    </Breadcrumbs>
    <div class="section">
      <h3 class="title">{{ spot_scenicSpotDetail.ScenicSpotName }}</h3>
      <div class="tagbox" v-if="spot_scenicSpotDetail.Class1">
        <ClassTag>{{ `# ${spot_scenicSpotDetail.Class1}` }}</ClassTag>
        <ClassTag v-if="spot_scenicSpotDetail.Class2">{{
          `# ${spot_scenicSpotDetail.Class2}`
        }}</ClassTag>
        <ClassTag v-if="spot_scenicSpotDetail.Class3">{{
          `# ${spot_scenicSpotDetail.Class3}`
        }}</ClassTag>
      </div>
      <div class="desc">
        <h4>餐廳介紹：</h4>
        <div>
          {{
            spot_scenicSpotDetail.DescriptionDetail ||
            spot_scenicSpotDetail.Description
          }}
        </div>
      </div>
      <div class="info">
        <div class="row" v-if="spot_scenicSpotDetail.OpenTime">
          <h4>開放時間：</h4>
          <div>{{ spot_scenicSpotDetail.OpenTime }}</div>
        </div>
        <div class="row">
          <h4>服務電話：</h4>
          <div>{{ spot_scenicSpotDetail.Phone }}</div>
        </div>
        <div class="row">
          <h4>景點地址：</h4>
          <div>{{ spot_scenicSpotDetail.Address }}</div>
        </div>
        <div class="row" v-if="spot_scenicSpotDetail.WebsiteUrl">
          <h4>官方網站：</h4>
          <div>{{ spot_scenicSpotDetail.WebsiteUrl }}</div>
        </div>
        <div class="row" v-if="spot_scenicSpotDetail.TicketInfo">
          <h4>票價資訊：</h4>
          <div>{{ spot_scenicSpotDetail.TicketInfo }}</div>
        </div>
        <div class="row" v-if="spot_scenicSpotDetail.Remarks">
          <h4>注意事項：</h4>
          <div>{{ spot_scenicSpotDetail.Remarks }}</div>
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
  name: 'ScenicSpotDetail',
  components: {
    Breadcrumbs,
    NavMenu,
    ClassTag,
  },
  mixins: [spotDelegate],
  mounted() {
    this.spot_scenicSpotId = this.$route.params.id
    this.spot_getScenicSpotDetail()
  },
  beforeDestroy() {
    this.spot_scenicSpotId = ''
    this.spot_scenicSpotDetail = null
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
    @media (--pc-viewport) {
      padding: 30px;
    }
    & .row {
      display: flex;
      & + .row {
        margin-top: 10px;
      }
    }
  }
}
</style>
