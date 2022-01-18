<template>
  <div class="footer">
    <div>Design:Breakfast & Front-end:Elissa</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.footer {
  background-color: var(--green2);
  text-align: center;
  padding: 20px 0px;
  & div {
    font-size: var(--text1);
    font-weight: 400;
    color: var(--white);
  }
}
</style>
