<template>
  <section class="date">
<div class="date__wrapper">
  <div class="date__calendar">
    <img src="../assets/images/date-of-wedd.png"  class="date__img">
  </div>
  <div class="date__convert">
    <img src="../assets/images/convert.png"  class="date__img">
  </div>
</div>
  </section>
</template>

<script>
export default {
  name: 'Date'
}
</script>

<style scoped>
.date {
position: relative;
padding: 40px 20px;
}

.date__wrapper {
  display: flex;
flex-direction: column;
  align-items: center;
}

.date__img {
  width: 100%;
}

.date__calendar {
 width: 100%;
 max-width: 335px;
}

.date__convert {
  width: 100%;
  max-width: 321px;
  margin-top: -57px;
}
</style>
