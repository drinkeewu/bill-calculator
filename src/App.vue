<template>
  <div id="app">
    <calculator />
  </div>
</template>

<script>
import Calc from "./components/Calculator.vue";
export default {
  name: "App",
  components: {
    'calculator': Calc
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
