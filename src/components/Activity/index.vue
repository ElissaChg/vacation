<template>
  <div class="activity" v-if="item">
    <router-link :to="link">
      <div class="photo" :class="[photo ? '' : 'no']">
        <div
          class="img"
          :style="{ 'background-image': `url('${photo}')` }"
          v-if="photo"
        ></div>
        <div class="icon" v-else></div>
      </div>
      <div class="info">
        <div class="time">{{ date }}</div>
        <div class="title">{{ item.ActivityName }}</div>
        <div class="bottom">
          <Location :text="item.Location" />
          <div class="link">
            <span>{{ $t('pages.home.more') }}</span>
            <Icon icon="i-right" color="#7f977b" />
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Location from '@/components/ui/Location'
import { toDate } from '@/tools/dataFormet'

export default {
  name: 'Activity',
  props: {
    item: {
      type: Object,
      default: null,
    },
    link: {
      type: [String, Object],
      default: '',
    },
  },
  components: {
    Icon,
    Location,
  },
  computed: {
    date() {
      return `${toDate(this.item.StartTime)} - ${toDate(this.item.EndTime)}`
    },
    photo() {
      return (this.item.Picture && this.item.Picture.PictureUrl1) || ''
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.activity {
  & .location {
    @media (--pc-viewport) {
      width: calc(100% - 85px);
    }
  }
}
.activity {
  width: 100%;
  margin-bottom: 12px;
  @media (--pc-viewport) {
    width: 48.6%;
  }
  & > a {
    display: flex;
    border-radius: 12px;
    box-sizing: border-box;
    text-decoration: none;
    @media (--pc-viewport) {
      background-color: var(--gray6);
      border: 1px solid var(--gray5);
    }
    &:hover {
      & .photo {
        & .img,
        & .icon {
          @media (hover: hover) {
            transform: scale(1.08);
          }
        }
      }
    }
  }
  & .photo {
    border-radius: 12px;
    overflow: hidden;
    @media (--pc-viewport) {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    &.no {
      background-color: var(--green3);
      opacity: 0.4;
    }
    & .img {
      width: 90px;
      height: 74px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      transform: scale(1);
      transition: transform 0.2s;
      @media (--pc-viewport) {
        width: 160px;
        height: 160px;
      }
    }
    & .icon {
      width: 90px;
      height: 74px;
      background-image: url('/img/noimg.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 25px 20px;
      transform: scale(1);
      transition: transform 0.2s;
      @media (--pc-viewport) {
        width: 160px;
        height: 160px;
        background-size: 50px 40px;
      }
    }
  }
  & .info {
    width: calc(100% - 90px);
    padding: 0px 15px;
    box-sizing: border-box;
    @media (--pc-viewport) {
      width: calc(100% - 160px);
      padding: 15px 30px;
    }
    & .time {
      font-size: var(--text1);
      font-weight: 400;
      color: var(--gray3);
      @media (--pc-viewport) {
        font-size: var(--text2);
      }
    }
    & .title {
      height: 38px;
      line-height: 19px;
      font-size: var(--text2);
      font-weight: 700;
      color: var(--gray1);
      overflow: hidden;
      @media (--pc-viewport) {
        height: 60px;
        font-size: var(--text5);
        line-height: 30px;
        margin-bottom: 17px;
      }
    }
    & .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--text2);
      font-weight: 400;
      color: var(--gray3);
    }
    & .link {
      display: none;
      align-items: center;
      font-weight: 500;
      color: var(--green3);
      @media (--pc-viewport) {
        display: flex;
      }
      & span {
        padding-right: 3px;
      }
    }
  }
}
</style>
