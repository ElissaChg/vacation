<template>
  <div class="nodata">
    <img src="/img/nofound.png" alt="" />
    <div>{{ $t('components.searchList.noData') }}</div>
  </div>
</template>

<script>
export default {
  name: 'NoData',
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.nodata {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: var(--text4);
  line-height: 34px;
  font-weight: 700;
  color: var(--green3);
  @apply --text-many;
  text-align: center;
  & img {
    margin: 0px auto 10px auto;
  }
}
</style>
