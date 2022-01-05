<template>
  <!-- 這個格式有問題 缺少 fill -->
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3.5L10 8L6 12.5"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'I-arrow',
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
