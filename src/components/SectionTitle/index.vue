<template>
  <div class="title">
    <h4>{{ title }}</h4>
    <router-link :to="link">
      <span>查看更多活動</span>
      <Icon icon="i-right" color="#FF725E" />
    </router-link>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  components: {
    Icon,
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (--pc-viewport) {
    margin-bottom: 15px;
  }
  & h4 {
    font-size: var(--text6);
    font-weight: 300;
    color: var(--gray2);
    margin: 0px;
    @media (--pc-viewport) {
      font-size: var(--text8);
    }
  }
  & a {
    display: flex;
    align-items: center;
    font-size: var(--text2);
    font-weight: 500;
    color: var(--orange);
    text-decoration: none;
    & span {
      padding-right: 3px;
    }
  }
}
</style>
