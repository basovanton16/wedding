<template>
  <section class="promo">
    <div class="promo__wrapper">
      <div class="promo__bg">
        <img src="../assets/images/titleName.png" class="promo__title-name">
        <img src="../assets/images/bg.png" class="promo__img" />
      </div>
      <div class="promo__title">Дорогие друзья и&nbsp;родные!</div>
      <div class="promo__subtitle">
        Скоро в&nbsp;нашей жизни состоится важное событие&nbsp;&mdash; наша
        свадьба!
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
  max-width: 375px;
}

.promo__img {
  width: 100%;
}

.promo__bg {
  position: relative;
  width: 100%;
  max-width: 375px;
}

.promo__title-name {
  position: absolute;
  width: 100%;
  max-width: 291px;
  top: 24px;
  left: 24px;
}
</style>
