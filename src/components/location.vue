<template>
  <section class="location">
    <div class="location__wrapper">
      <div class="location__title">
        <img src="../assets/images/location-title.png" class="location__img">
      </div>
      <div class="location__map">
        <img src="../assets/images/map.png" class="location__img">
      </div>
      <div class="location__description">
        <img src="../assets/images/location-descr.png" class="location__img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Location'
}
</script>

<style scoped>
.location {
position: relative;
padding: 40px 20px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
}

.location__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 335px;
}

.location__img {
  width: 100%;
}

.location__title {
  margin-bottom: 32px;
}

.location__map {
  margin-bottom: 32px;
}
</style>
