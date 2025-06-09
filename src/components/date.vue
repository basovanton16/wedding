<template>
  <section class="date">
<div class="date__wrapper">
  <div class="date__calendar" ref="calendarRef">
    <img src="../assets/images/date-of-wedd.png"  class="date__img">
  </div>
  <div class="date__convert" ref="convertRef">
    <img src="../assets/images/convert.png"  class="date__img">
  </div>
</div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'

export default {
  name: 'Date',
  setup() {
    const calendarRef = ref(null)
    const convertRef = ref(null)

    const { animateFromBottom, animateScale } = useGSAPAnimations()

    onMounted(() => {
      // Анимация календаря с масштабированием
      animateScale(calendarRef.value, {
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: calendarRef.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация конвертера снизу с задержкой
      animateFromBottom(convertRef.value, {
        duration: 1,
        y: 40,
        delay: 0.3,
        scrollTrigger: {
          trigger: convertRef.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })

    return {
      calendarRef,
      convertRef
    }
  }
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
