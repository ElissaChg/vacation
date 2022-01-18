<template>
  <div class="tag"><slot /></div>
</template>

<script>
export default {
  name: 'ClassTag',
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.tag {
  font-size: var(--text1);
  font-weight: 400;
  padding: 3px 12px;
  color: var(--brown);
  border: 1px solid var(--brown);
  border-radius: 18px;
  box-sizing: border-box;
  @media (--pc-viewport) {
    font-size: var(--text4);
    padding: 3px 18px;
  }
  & + .tag {
    margin-left: 5px;
  }
}
</style>
