<template>
  <section class="location">
    <div class="location__wrapper">
      <div class="location__title" ref="titleRef">
        <img src="../assets/images/location-title.png" class="location__img">
      </div>
      <div class="location__map" ref="mapRef">
        <img src="../assets/images/map.png" class="location__img">
      </div>
      <div class="location__description" ref="descriptionRef">
        <img src="../assets/images/location-descr.png" class="location__img">
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'

export default {
  name: 'Location',
  setup() {
    const titleRef = ref(null)
    const mapRef = ref(null)
    const descriptionRef = ref(null)

    const { animateFromBottom, animateScale, animateFromLeft, animateFromRight } = useGSAPAnimations()

    onMounted(() => {
      // Анимация заголовка снизу
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

      // Анимация карты с масштабированием
      animateScale(mapRef.value, {
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: mapRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация описания снизу
      animateFromBottom(descriptionRef.value, {
        duration: 1,
        y: 30,
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
      mapRef,
      descriptionRef
    }
  }
}
</script>

<style scoped>
.location {
position: relative;
padding: 40px 20px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
}

.location__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 335px;
}

.location__img {
  width: 100%;
}

.location__title {
  margin-bottom: 32px;
}

.location__map {
  margin-bottom: 32px;
}
</style>
