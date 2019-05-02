<template>
  <div class="flex-content" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "FlexBox",
  props: {
    justify: {
      type: String,
      default: "flex-start"
    }
  },
  computed: {
    style() {
      return {
        display: "flex",
        "justify-content": this.justify
      };
    }
  }
};
</script>

<style scoped lang="scss">
</style>
