<template>
  <component :is="icon" :size="size" :color="color" />
</template>

<script>
import i_arrow from './svg/I-arrow'
import i_search from './svg/I-search'
import i_spot from './svg/I-spot'

export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: '16',
    },
    color: {
      type: String,
      default: '#000',
    },
  },
  components: {
    'i-arrow': i_arrow,
    'i-search': i_search,
    'i-spot': i_spot,
  },
}
</script>
