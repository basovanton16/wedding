<template>
  <div id="app" class="app">
    <Promo class="promo" />
    <Date class="date"/>
    <Location class="location"/>
    <Timing class="timing"/>
    <Dresscode class="dresscode"/>
    <Wishes class="wishes"/>
    <Go class="go"/>
  </div>
</template>

<script>
import Promo from "./components/promo.vue";
import Date from './components/date.vue';
import Location from './components/location.vue';
import Timing from './components/timing.vue';
import Dresscode from './components/dresscode.vue';
import Wishes from './components/wishes.vue';
import Go from './components/youGo.vue';
export default {
  name: "App",

  components: {
    Promo,
    Date,
    Location,
    Timing,
    Dresscode,
    Wishes,
    Go
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
