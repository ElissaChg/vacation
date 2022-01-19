<template>
  <router-link :to="link" class="card" v-if="item">
    <Photo :src="photo" />
    <div class="title">{{ text }}</div>
    <Location :text="item.City" v-if="item.City" />
  </router-link>
</template>

<script>
import Photo from '@/components/Photo'
import Location from '@/components/ui/Location'

export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default: null,
    },
    text: {
      type: String,
      default: '',
    },
    link: {
      type: [String, Object],
      default: '',
    },
  },
  components: {
    Photo,
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
    & >>> .photo {
      & .img,
      & .icon {
        @media (hover: hover) {
          transform: scale(1.08);
        }
      }
    }
  }
  & >>> .photo {
    margin-bottom: 10px;
  }
  & .title {
    width: 100%;
    font-size: var(--text3);
    font-weight: 700;
    color: var(--gray1);
    margin-bottom: 6px;
    @apply --text-break;
    @media (--pc-viewport) {
      font-size: var(--text5);
    }
  }
}
</style>
