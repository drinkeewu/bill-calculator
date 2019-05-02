<template>
  <div
    class="c--flex-box"
    :style="style"
    :class="{pointer : pointer}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FlexBox',
  props: {
    justify: {
      type: String,
      default: 'start',
    },
    wrap: {
      type: String,
      default: 'nowrap',
    },
    align: {
      type: String,
      default: 'start',
    },
    padding: {
      type: String,
      default: '',
    },
    direction: {
      type: String,
      default: 'flex-start',
    },
    pointer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      return {
        'justify-content': this.justify,
        'flex-wrap': this.wrap,
        'flex-direction': this.direction,
        'align-items': this.align,
      };
    },
  },

  mounted() {
    if (this.padding) {
      this.$el.style.paddingTop = this.padding;
      this.$el.style.paddingBottom = this.padding;
    }
  },

};
</script>

<style scoped lang="scss">
.c--flex-box {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  &.pointer {
    cursor: pointer;
  }
}
</style>
