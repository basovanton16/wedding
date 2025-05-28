<template>
  <section class="go">
    <div class="go__wrapper">
      <div class="go__title">
        <img src="../assets/images/go-title.png" class="go__img">
      </div>
      <div class="go__subtitle">
        <img src="../assets/images/go-subtitle.png" class="go__img">
      </div>
      <div class="go__button">
        <img src="../assets/images/go-button.png" class="go__img">
      </div>
    </div>
    <div class="go__bg">
      <img src="../assets/images/bg-2.jpeg" class="go__img">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Go'
}
</script>

<style scoped>
.go {
  position: relative;
  width: 100%;
  background: #AA4703;
}

.go__wrapper {
  padding: 40px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 375px;
  margin: 0 auto;
}

.go__title,
.go__subtitle,
.go__button {
  width: 100%;
  max-width: 335px;
}

.go__title {
  max-width: 229px;
  margin-bottom: 16px;
}

.go__button {
  margin-top: 32px;
  margin-bottom: 40px;
}
</style>
