<template>
  <section class="promo">
    <div class="promo__wrapper">
      <div class="promo__bg" ref="bgRef">
        <img src="../assets/images/titleName.png" class="promo__title-name" ref="titleNameRef" />
        <img src="../assets/images/bg.jpg" class="promo__img" ref="bgImageRef" />
      </div>
      <div class="promo__title" ref="titleRef">
        <img src="../assets/images/promo-title.png" class="promo__img" />
      </div>
      <div class="promo__subtitle" ref="subtitleRef">
        <img src="../assets/images/promo-subtitle.png" class="promo__img" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'

export default {
  name: "Promo",
  setup() {
    const bgRef = ref(null)
    const titleNameRef = ref(null)
    const bgImageRef = ref(null)
    const titleRef = ref(null)
    const subtitleRef = ref(null)

    const { animateFromBottom, animateScale, animateFadeIn, createTimeline } = useGSAPAnimations()

    onMounted(() => {
      // Анимация фонового изображения
      // animateFadeIn(bgImageRef.value, {
      //   duration: 2,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: bgImageRef.value,
      //     start: "top 90%",
      //     end: "bottom 20%",
      //     toggleActions: "play none none reverse"
      //   }
      // })

      // Анимация названия свадьбы
      animateScale(titleNameRef.value, {
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleNameRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация заголовка
      animateFromBottom(titleRef.value, {
        duration: 1,
        y: 90,
        scrollTrigger: {
          trigger: titleRef.value,
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация подзаголовка
      animateFromBottom(subtitleRef.value, {
        duration: 0.8,
        y: 120,
        delay: 1.3,
        scrollTrigger: {
          trigger: subtitleRef.value,
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })

    return {
      bgRef,
      titleNameRef,
      bgImageRef,
      titleRef,
      subtitleRef
    }
  }
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
