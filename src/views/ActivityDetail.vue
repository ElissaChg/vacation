<template>
  <div class="detail" v-if="spot_activityDetail">
    <Breadcrumbs>
      <NavMenu :text="$t('components.nav.activity')" to="/activity" />
      <NavMenu :text="spot_activityDetail.ActivityName" />
    </Breadcrumbs>
    <div class="section">
      <h3 class="title">{{ spot_activityDetail.ActivityName }}</h3>
      <div class="tagbox">
        <ClassTag>{{ `# ${spot_activityDetail.Class1}` }}</ClassTag>
        <ClassTag>{{ `# ${spot_activityDetail.Class2}` }}</ClassTag>
      </div>
      <div class="desc">
        <h4>活動介紹：</h4>
        <div>{{ spot_activityDetail.Description }}</div>
      </div>
      <div class="info">
        <div class="row">
          <h4>活動時間：</h4>
          <div>{{ time }}</div>
        </div>
        <div class="row">
          <h4>主辦單位：</h4>
          <div>{{ spot_activityDetail.Organizer }}</div>
        </div>
        <div class="row">
          <h4>活動地點：</h4>
          <div>{{ spot_activityDetail.Address }}</div>
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
import { toDateAndTime } from '@/tools/dataFormet'

export default {
  name: 'ActivityDetail',
  components: {
    Breadcrumbs,
    NavMenu,
    ClassTag,
  },
  mixins: [spotDelegate],
  computed: {
    time() {
      return `${toDateAndTime(
        this.spot_activityDetail.StartTime
      )} - ${toDateAndTime(this.spot_activityDetail.EndTime)}`
    },
  },
  mounted() {
    this.spot_activityId = this.$route.params.id
    this.spot_getActivityDetail()
  },
  beforeDestroy() {
    this.spot_activityId = ''
    this.spot_activityDetail = null
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
