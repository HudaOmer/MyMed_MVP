<template>
  <div id="app">
    <webapp-header/>
   
    <div class="page wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from "../src/components/nav_bar.vue";
export default {
  name: "App",
  components: {
    "webapp-header": header,
  },
};
</script>

<style>
@import '../src/css/style.css'

</style>