<template>
  <section class="promo">
    <div class="promo__wrapper">
      <div class="promo__bg">
        <img src="../assets/images/titleName.png" class="promo__title-name" />
        <img src="../assets/images/bg.jpg" class="promo__img" />
      </div>
      <div class="promo__title">
        <img src="../assets/images/promo-title.png" class="promo__img" />
      </div>
      <div class="promo__subtitle">
        <img src="../assets/images/promo-subtitle.png" class="promo__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Promo",
};
</script>

<style scoped>
.promo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 20px 40px 20px;
  background: #aa4703;
  width: 100%;
}

.promo__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 375px;
}

.promo__img {
  width: 100%;
}

.promo__bg {
  position: relative;
  width: 100%;
  max-width: 375px;
  margin-bottom: 32px;
}

.promo__title-name {
  position: absolute;
  width: 80%;
  top: 24px;
  left: 24px;
}

.promo__title {
  width: 100%;
  margin-bottom: 8px;
}

.promo__subtitle {
  width: 100%;
max-width: 321px;
}
</style>
