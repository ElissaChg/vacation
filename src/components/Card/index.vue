<template>
  <div class="card">
    <div class="photo">
      <router-link :to="link">
        <img src="https://fakeimg.pl/255x200/" alt="" />
      </router-link>
    </div>
    <div class="title">龜山島牛奶海</div>
    <Location text="南投縣" />
  </div>
</template>

<script>
import Location from '@/components/ui/Location'

export default {
  name: 'Card',
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  components: {
    Location,
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.card {
  width: 24.3%;
  margin-bottom: 12px;
  & .photo {
    width: 255px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 10px;
    & a {
      display: block;
      transform: scale(1);
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
  & .title {
    font-size: var(--text5);
    font-weight: 700;
    color: var(--gray1);
    padding-bottom: 6px;
  }
}
</style>
