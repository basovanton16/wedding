<template>
  <section class="timing">
    <div class="timing__wrapper">
      <div class="timing__title">
        <img src="../assets/images/timing-title.png" class="timing__img">
      </div>
      <div class="timing__description">
        <img src="../assets/images/timing-descr.png" class="timing__img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Timing'
}
</script>

<style scoped>
.timing {
position: relative;
width: 100%;
background: #AA4703;
padding: 40px 20px;
display: flex;
flex-direction: column;
align-items: center;
}

.timing__img {
  width: 100%;
}
.timing__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.timing__title {
  width: 100%;
  max-width: 165px;
  margin-bottom: 32px;
}

.timing__description {
  width: 100%;
  max-width: 335px;
}
</style>
