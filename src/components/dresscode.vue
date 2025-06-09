<template>
  <header class="dresscode">
    <div class="dresscode__wrapper">
      <div class="dresscode__title" ref="titleRef">
        <img src="../assets/images/dresscode-title.png" class="dresscode__img">
      </div>
      <div class="dresscode__subtitle" ref="subtitleRef">
        <img src="../assets/images/dresscode-descr.png" class="dresscode__img">
      </div>
      <div class="dresscode__colors" ref="colorsRef">
        <img src="../assets/images/colors-wedd.png" class="dresscode__img">
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'

export default {
  name: 'Dresscode',
  setup() {
    const titleRef = ref(null)
    const subtitleRef = ref(null)
    const colorsRef = ref(null)

    const { animateFromBottom, animateScale, createTimeline } = useGSAPAnimations()

    onMounted(() => {
      // Анимация заголовка
      animateFromBottom(titleRef.value, {
        duration: 1,
        y: 40,
        scrollTrigger: {
          trigger: titleRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация подзаголовка
      animateFromBottom(subtitleRef.value, {
        duration: 0.8,
        y: 30,
        scrollTrigger: {
          trigger: subtitleRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация цветов
      animateScale(colorsRef.value, {
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: colorsRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })

    return {
      titleRef,
      subtitleRef,
      colorsRef
    }
  }
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
