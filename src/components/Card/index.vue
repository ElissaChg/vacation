<template>
  <div class="card" v-if="item">
    <router-link :to="link">
      <div class="photo">
        <div
          class="img"
          :style="{ 'background-image': `url('${photo}')` }"
        ></div>
      </div>
      <div class="title">{{ item.ActivityName }}</div>
      <Location :text="item.Location" />
    </router-link>
  </div>
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
  & > a {
    display: block;
    text-decoration: none;
    &:hover {
      & .photo {
        & .img {
          @media (hover: hover) {
            transform: scale(1.08);
          }
        }
      }
    }
  }
  & .photo {
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 10px;
    & .img {
      width: 255px;
      height: 200px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      transform: scale(1);
      transition: transform 0.2s;
    }
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
