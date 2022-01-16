<template>
  <div
    class="typecard"
    :style="{ 'background-image': `url('${img}')` }"
    @pointerup.stop="$emit('on-click')"
  >
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
export default {
  name: 'TypeCard',
  props: {
    img: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.typecard {
  width: 100%;
  height: 124px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    & h4 {
      @media (hover: hover) {
        opacity: 1;
      }
    }
  }
  & h4 {
    margin: 0px;
    font-size: var(--text2);
    font-weight: 700;
    color: var(--white);
    opacity: 0.7;
    transition: opacity 0.2s;
    @media (--pc-viewport) {
      font-size: var(--text6);
    }
  }
}
</style>
