<template>
  <section class="wishes">
    <div class="wishes__bg" ref="bgRef">
      <img src="../assets/images/flower.png" class="wishes__img" />
    </div>
    <div class="wishes__wrapper">
      <div class="wishes__title" ref="titleRef">
        <img src="../assets/images/wishes-title.png" class="wishes__img" />
      </div>
      <div class="wishes__1 wishes-item" ref="item1Ref">
        <img src="../assets/images/wishes-1.png" class="wishes__img" />
      </div>
      <div class="wishes__2 wishes-item" ref="item2Ref">
        <img src="../assets/images/wishes-2.png" class="wishes__img" />
      </div>
      <div class="wishes__3 wishes-item" ref="item3Ref">
        <img src="../assets/images/wishes-3.png" class="wishes__img" />
      </div>
      <div class="wishes__4 wishes-item" ref="item4Ref">
        <img src="../assets/images/wishes-4.png" class="wishes__img" />
      </div>
      <div class="wishes__button" ref="buttonRef">
        <a href="tel:+79187776620" class="wishes__button-link">
          <img src="../assets/images/wishes-button.png" class="wishes__img" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useGSAPAnimations } from '../composables/useGSAPAnimations.js'

export default {
  name: "Wishes",
  setup() {
    const bgRef = ref(null)
    const titleRef = ref(null)
    const item1Ref = ref(null)
    const item2Ref = ref(null)
    const item3Ref = ref(null)
    const item4Ref = ref(null)
    const buttonRef = ref(null)

    const { animateFromBottom, animateScale, animateStagger, animateFromLeft, animateFromRight } = useGSAPAnimations()

    onMounted(() => {
      // Анимация фона
      animateFromBottom(bgRef.value, {
        duration: 1.5,
        y: 20,
        scrollTrigger: {
          trigger: bgRef.value,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация заголовка
      animateScale(titleRef.value, {
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.value,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Анимация каждой карточки пожеланий по скроллу
      animateFromBottom(item1Ref.value, {
        duration: 0.8,
        y: 40,
        scrollTrigger: {
          trigger: item1Ref.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      animateFromBottom(item2Ref.value, {
        duration: 0.8,
        y: 40,
        scrollTrigger: {
          trigger: item2Ref.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      animateFromBottom(item3Ref.value, {
        duration: 0.8,
        y: 40,
        scrollTrigger: {
          trigger: item3Ref.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      animateFromBottom(item4Ref.value, {
        duration: 0.8,
        y: 40,
        scrollTrigger: {
          trigger: item4Ref.value,
          start: "top 80%",
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
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })

    return {
      bgRef,
      titleRef,
      item1Ref,
      item2Ref,
      item3Ref,
      item4Ref,
      buttonRef
    }
  }
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

.wishes__button-link {
  display: block;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
animation: pulse 2s infinite;
}

.wishes__button-link:hover {
  transform: scale(1.05);
}

.wishes__button-link:active {
  transform: scale(0.95);
}

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

  .wishes__button-link {
    animation: pulse 1.5s infinite;
  }
</style>
