<template>
  <section class="location">
    <div class="location__wrapper">
      <div class="location__title" ref="titleRef">
        <img src="../assets/images/location-title.png" class="location__img">
      </div>
      <div class="location__map" ref="mapRef">
        <a href="https://yandex.ru/maps/-/CHSVjVJD" target="_blank">
          <img src="../assets/images/map.png" class="location__img">
        </a>
      </div>
      <div class="location__description" ref="descriptionRef" @click="copyAddress">
        <img src="../assets/images/location-descr.png" class="location__img">
      </div>
    </div>

    <!-- Toast уведомление -->
    <div v-if="showToast" class="toast" :class="{ 'toast--show': showToast }">
      <div class="toast__content">
        <span class="toast__icon">✓</span>
        <span class="toast__text">Адрес скопирован!</span>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'
import copy from 'copy-to-clipboard';


export default {
  name: 'Location',
  setup() {
    const titleRef = ref(null)
    const mapRef = ref(null)
    const descriptionRef = ref(null)
    const showToast = ref(false)

    const copyAddress = () => {
      const address = 'Прудовый заезд 1А, село Верхнерусское, Шпаковский муниципальный округ, Ставропольский край'
      const success = copy(address)

      if (success) {
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 3000) // Скрываем через 3 секунды
      }
    }

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
      descriptionRef,
      copyAddress,
      showToast
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

.location__description {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.location__description:hover {
  transform: scale(1.02);
}

.location__description:active {
  transform: scale(0.98);
}

/* Toast уведомление */
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  opacity: 0;
  width: 90%;
  transition: all 0.3s ease;
  pointer-events: none;
}

.toast--show {
  opacity: 1;
  animation: slideDown 0.3s ease;
}

.toast__content {
  background: white;
  color: black;
  padding: 12px 20px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(80, 80, 81, 0.3);
  font-size: 18px;
  font-weight: 500;
}

.toast__icon {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Для мобильных устройств */
/* @media (max-width: 768px) {
  .toast {
    top: 10px;
    left: 10px;
    right: 10px;
    transform: none;
  }

  .toast__content {
    padding: 16px 20px;
    font-size: 16px;
    color: black;
  }
} */
</style>
