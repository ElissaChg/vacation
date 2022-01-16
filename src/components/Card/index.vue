<template>
  <router-link :to="link" class="card" v-if="item">
    <div class="photo" :class="[photo ? '' : 'no']">
      <div
        class="img"
        :style="{ 'background-image': `url('${photo}')` }"
        v-if="photo"
      ></div>
      <div class="icon" v-else></div>
    </div>
    <div class="title">{{ item.ActivityName }}</div>
    <Location :text="item.Location" />
  </router-link>
</template>

<script>
import Location from '@/components/ui/Location'

export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default: null,
    },
    link: {
      type: String,
      default: '',
    },
  },
  components: {
    Location,
  },
  computed: {
    photo() {
      return (this.item.Picture && this.item.Picture.PictureUrl1) || ''
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.card {
  display: block;
  text-decoration: none;
  width: 100%;
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
  & .photo {
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 10px;
    &.no {
      background-color: var(--green3);
      opacity: 0.4;
    }
    & .img {
      width: 100%;
      height: 200px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      transform: scale(1);
      transition: transform 0.2s;
    }
  }
  & .icon {
    width: 100%;
    height: 200px;
    background-image: url('/img/noimg.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 50px 40px;
    transform: scale(1);
    transition: transform 0.2s;
  }
  & .title {
    width: 100%;
    font-size: var(--text3);
    font-weight: 700;
    color: var(--gray1);
    padding-bottom: 6px;
    @apply --text-break;
    @media (--pc-viewport) {
      font-size: var(--text5);
    }
  }
}
</style>
