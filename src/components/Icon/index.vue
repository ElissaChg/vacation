<template>
  <component :is="icon" :size="size" :color="color" />
</template>

<script>
import IconDown from './svg/IconDown'
import IconLeft from './svg/IconLeft'
import IconRight from './svg/IconRight'
import IconSearch from './svg/IconSearch'
import IconSpot from './svg/IconSpot'

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
    'i-down': IconDown,
    'i-left': IconLeft,
    'i-right': IconRight,
    'i-search': IconSearch,
    'i-spot': IconSpot,
  },
}
</script>
