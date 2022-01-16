<template>
  <div class="select-ui">
    <div class="label">
      <span>{{ label }}</span>
      <Icon icon="i-down" color="#7F977B" size="16" />
    </div>
    <select v-model="selected">
      <option :value="item.value" v-for="(item, idx) in options" :key="idx">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Lazy from 'lazy.js'

export default {
  name: 'SelectUi',
  props: {
    options: {
      type: Array,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selected: '',
    }
  },
  components: {
    Icon,
  },
  watch: {
    selected(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.selected = val
    },
  },
  computed: {
    label() {
      return Lazy(this.options)
        .filter((el) => el.value === this.selected)
        .pluck('label')
    },
  },
  mounted() {
    if (this.value) {
      this.selected = this.value
    }
  },
}
</script>

<style lang="postcss" scoped>
@import 'val.postcss';
.select-ui {
  width: 100%;
  position: relative;
  & .label {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: var(--text2);
    border: 1px solid var(--gray5);
    background-color: var(--white);
    font-weight: 500;
    color: var(--green3);
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    box-sizing: border-box;
    cursor: pointer;
  }
  & select {
    width: 100%;
    height: 50px;
    cursor: pointer;
  }
}
</style>
