<template>
  <section class="timing">
    <div class="timing__wrapper">
      <div class="timing__title" ref="titleRef">
        <img src="../assets/images/timing-title.png" class="timing__img">
      </div>
      <div class="timing__description" ref="descriptionRef">
        <img src="../assets/images/timing-descr.png" class="timing__img">
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'

export default {
  name: 'Timing',
  setup() {
    const titleRef = ref(null)
    const descriptionRef = ref(null)

    const { animateFromLeft, animateFromRight } = useGSAPAnimations()

    onMounted(() => {
      // Анимация заголовка слева
      animateFromLeft(titleRef.value, {
        duration: 1,
        x: -40,
        scrollTrigger: {
          trigger: titleRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация описания справа
      animateFromRight(descriptionRef.value, {
        duration: 1,
        x: 40,
        scrollTrigger: {
          trigger: descriptionRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })

    return {
      titleRef,
      descriptionRef
    }
  }
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
