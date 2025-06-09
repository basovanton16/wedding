<template>
  <section class="go">
    <div class="go__wrapper">
      <div class="go__title" ref="titleRef">
        <img src="../assets/images/go-title.png" class="go__img">
      </div>
      <div class="go__subtitle" ref="subtitleRef">
        <img src="../assets/images/go-subtitle.png" class="go__img">
      </div>
      <div class="go__button" ref="buttonRef">
        <a href="tel:+79187776620">
          <img src="../assets/images/go-button.png" class="go__img">
        </a>
      </div>
    </div>
    <div class="go__bg" ref="bgRef">
      <img src="../assets/images/bg-2.jpg" class="go__img go__img-bg">
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'

export default {
  name: 'Go',
  setup() {
    const titleRef = ref(null)
    const subtitleRef = ref(null)
    const buttonRef = ref(null)
    const bgRef = ref(null)

    const { animateFromBottom, animateScale, createTimeline } = useGSAPAnimations()

    onMounted(() => {
      // Анимация фона
      // animateFromBottom(bgRef.value, {
      //   duration: 1.5,
      //   // y: 30,
      //   scrollTrigger: {
      //     trigger: bgRef.value,
      //     start: "top 90%",
      //     end: "bottom 20%",
      //     toggleActions: "play none none reverse"
      //   }
      // })

      // Анимация заголовка
      animateFromBottom(titleRef.value, {
        duration: 1,
        y: 50,
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

      // Анимация кнопки
      animateScale(buttonRef.value, {
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.value,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })

    return {
      titleRef,
      subtitleRef,
      buttonRef,
      bgRef
    }
  }
}
</script>

<style scoped>
.go {
  position: relative;
  width: 100%;
  background: #AA4703;
  overflow: hidden;
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
  display: block;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: pulse 2s infinite;
}

.go__button-link:hover {
  transform: scale(1.05);
}

.go__button-link:active {
  transform: scale(0.95);
}

/* Для мобильных устройств - более заметная пульсация */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

.go__img-bg {
  position: relative;
  bottom: -10px;
}
</style>
