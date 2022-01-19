<template>
  <div class="photo" :class="[img ? '' : 'no']">
    <div
      class="img"
      :style="{
        'background-image': `url('${img}')`,
      }"
      v-if="img"
    ></div>
    <div class="icon" v-else></div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      img: '',
    }
  },
  watch: {
    src: {
      immediate: true,
      handler(val) {
        if (val) {
          const _img = new Image()
          _img.onload = () => {
            this.img = val
          }
          _img.onerror = () => {}
          _img.src = val
        } else {
          this.img = ''
        }
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.photo {
  border-radius: 20px;
  overflow: hidden;
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
}
</style>
