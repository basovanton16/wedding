<template>
  <section class="date">
<div class="date__wrapper">
  <div class="date__calendar" ref="calendarRef">
    <img src="../assets/images/date-of-wedd.png"  class="date__img">
  </div>
  <div class="date__convert" ref="convertRef">
    <img  src="../assets/images/convert-bg.png" ref="convertRef1" class="date__img date__convert-1">
    <img src="../assets/images/convert-bg-2.png" ref="convertRef2" class="date__img date__convert-2">
    <img src="../assets/images/convert-bg-3.png" ref="convertRef3" class="date__img date__convert-3">
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
    const convertRef1 = ref(null)
    const convertRef2 = ref(null)
    const convertRef3 = ref(null)

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

      // Анимация третьей карточки - плавно выезжает наверх на 50 пикселей
      animateFromBottom(convertRef3.value, {
        duration: 1,
        y: 90,
        // delay: 0.3,
        scrollTrigger: {
          trigger: convertRef.value,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })

    return {
      calendarRef,
      convertRef,
      convertRef1,
      convertRef2,
      convertRef3
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
  position: relative;
  width: 100%;
  height: 290px;
  max-width: 321px;
  margin-top: -57px;
}

.date__convert-1 {
  position: absolute;
  top: 0;
}
.date__convert-2 {
  position: absolute;
  top: 112px;
  z-index: 3;
}
.date__convert-3 {
  position: absolute;
  top: 30px;
  width: 281px;
  left: 20px;
  right: 20px;
  margin: 0 auto;
}
</style>
