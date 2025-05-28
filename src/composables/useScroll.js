// Композабл для работы с прокруткой
import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const scrollY = ref(0)

  const updateScrollY = () => {
    scrollY.value = window.scrollY
  }

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScrollY)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollY)
  })

  return {
    scrollY,
    scrollTo
  }
}
