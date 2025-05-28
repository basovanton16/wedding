<template>
  <header class="dresscode">
    <div class="dresscode__wrapper">
      <div class="dresscode__title">
        <img src="../assets/images/dresscode-title.png" class="dresscode__img">
      </div>
      <div class="dresscode__subtitle">
        <img src="../assets/images/dresscode-descr.png" class="dresscode__img">
      </div>
      <div class="dresscode__colors">
        <img src="../assets/images/colors-wedd.png" class="dresscode__img">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Dresscode'
}
</script>

<style scoped>
.dresscode {
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 20px;
}

.dresscode__wrapper {
  width: 100%;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dresscode__title {
  width: 100%;
  max-width: 179px;
  margin-bottom: 16px;
}

.dresscode__colors {
  width: 100%;
  max-width: 280px;
  margin-top: 40px;
}
</style>
