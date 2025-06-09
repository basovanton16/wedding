import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export function useGSAPAnimations() {
  let animations = []

  // Функция для создания анимации появления снизу
  const animateFromBottom = (selector, options = {}) => {
    const defaults = {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }

    const config = { ...defaults, ...options }

    const animation = gsap.fromTo(selector,
      { y: config.y, opacity: config.opacity },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: config.scrollTrigger
      }
    )

    animations.push(animation)
    return animation
  }

  // Функция для создания анимации появления с масштабированием
  const animateScale = (selector, options = {}) => {
    const defaults = {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }

    const config = { ...defaults, ...options }

    const animation = gsap.fromTo(selector,
      { scale: config.scale, opacity: config.opacity },
      {
        scale: 1,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: config.scrollTrigger
      }
    )

    animations.push(animation)
    return animation
  }

  // Функция для создания поочередной анимации элементов
  const animateStagger = (selector, options = {}) => {
    const defaults = {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }

    const config = { ...defaults, ...options }

    const animation = gsap.fromTo(selector,
      { y: config.y, opacity: config.opacity },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        stagger: config.stagger,
        ease: config.ease,
        scrollTrigger: config.scrollTrigger
      }
    )

    animations.push(animation)
    return animation
  }

  // Функция для создания анимации появления слева
  const animateFromLeft = (selector, options = {}) => {
    const defaults = {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }

    const config = { ...defaults, ...options }

    const animation = gsap.fromTo(selector,
      { x: config.x, opacity: config.opacity },
      {
        x: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: config.scrollTrigger
      }
    )

    animations.push(animation)
    return animation
  }

  // Функция для создания анимации появления справа
  const animateFromRight = (selector, options = {}) => {
    const defaults = {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }

    const config = { ...defaults, ...options }

    const animation = gsap.fromTo(selector,
      { x: config.x, opacity: config.opacity },
      {
        x: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: config.scrollTrigger
      }
    )

    animations.push(animation)
    return animation
  }

  // Функция для создания простой анимации fade in
  const animateFadeIn = (selector, options = {}) => {
    const defaults = {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }

    const config = { ...defaults, ...options }

    const animation = gsap.fromTo(selector,
      { opacity: config.opacity },
      {
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: config.scrollTrigger
      }
    )

    animations.push(animation)
    return animation
  }

  // Функция для создания timeline анимации
  const createTimeline = (options = {}) => {
    const tl = gsap.timeline(options)
    animations.push(tl)
    return tl
  }

  // Очистка анимаций при размонтировании компонента
  const cleanup = () => {
    animations.forEach(animation => {
      if (animation.kill) {
        animation.kill()
      }
    })
    animations = []
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  onMounted(() => {
    // Обновляем ScrollTrigger при изменении размеров
    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    gsap,
    ScrollTrigger,
    animateFromBottom,
    animateScale,
    animateStagger,
    animateFromLeft,
    animateFromRight,
    animateFadeIn,
    createTimeline,
    cleanup
  }
}
