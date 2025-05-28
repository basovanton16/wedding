<template>
  <div id="app" class="app">
    <Promo class="promo" />
    <Date class="date"/>
  </div>
</template>

<script>
import Promo from "./components/promo.vue";
import Date from './components/date.vue';
export default {
  name: "App",

  components: {
    Promo,
    Date
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
