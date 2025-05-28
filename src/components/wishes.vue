<template>
  <section class="wishes">
    <div class="wishes__bg">
      <img src="../assets/images/flower.png" class="wishes__img" />
    </div>
    <div class="wishes__wrapper">
      <div class="wishes__title">
        <img src="../assets/images/wishes-title.png" class="wishes__img" />
      </div>
      <div class="wishes__1">
        <img src="../assets/images/wishes-1.png" class="wishes__img" />
      </div>
      <div class="wishes__2">
        <img src="../assets/images/wishes-2.png" class="wishes__img" />
      </div>
      <div class="wishes__3">
        <img src="../assets/images/wishes-3.png" class="wishes__img" />
      </div>
      <div class="wishes__4">
        <img src="../assets/images/wishes-4.png" class="wishes__img" />
      </div>
      <div class="wishes__button">
        <img src="../assets/images/wishes-button.png" class="wishes__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Wishes",
};
</script>

<style scoped>
.wishes {
  position: relative;
  width: 100%;
}

.wishes__bg {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
}

.wishes__wrapper {
  padding: 40px 20px;
  width: 100%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.wishes__title {
  width: 100%;
  max-width: 233px;
  margin-bottom: 32px;
}

.wishes__1,
.wishes__2,
.wishes__3,
.wishes__4 {
  width: 100%;
  max-width: 335px;
  margin-bottom: 24px;
}
.wishes__4 {
  margin-bottom: 32px;
}
.wishes__button {
  width: 100%;
  max-width: 335px;
}
</style>
