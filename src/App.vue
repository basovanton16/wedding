<template>
  <div id="app" class="app">
    <Promo class="promo" />
  </div>
</template>

<script>
import Promo from "./components/promo.vue";
export default {
  name: "App",

  components: {
    Promo,
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F1ECE6;
  width: 100%;
  height: 100%;
}
</style>
