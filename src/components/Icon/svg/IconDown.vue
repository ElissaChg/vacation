<template>
  <!-- 這個格式有問題 -->
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 6L8 10L3.5 6"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconDown',
  props: {
    size: {
      type: String,
      default: '16',
    },
    color: {
      type: String,
      default: '#000',
    },
  },
}
</script>
