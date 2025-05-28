// Настройки социального шеринга
export const SHARING_CONFIG = {
  // Основная информация для шеринга
  title: 'Свадьба Анны и Михаила - 15 июня 2025',
  description: 'Приглашаем вас разделить с нами самый важный день в нашей жизни',
  url: 'https://your-wedding-site.com',

  // Изображения для социальных сетей
  images: {
    // Open Graph изображение (Facebook, VK)
    og: '/src/assets/images/sharing/og-image.jpg',
    // Twitter Card изображение
    twitter: '/src/assets/images/sharing/twitter-card.jpg',
    // Favicon
    favicon: '/src/assets/images/icons/favicon.ico'
  },

  // Мета-теги для социальных сетей
  meta: {
    'og:type': 'website',
    'og:locale': 'ru_RU',
    'twitter:card': 'summary_large_image',
    'twitter:site': '@your_handle'
  },

  // Настройки для разных социальных сетей
  platforms: {
    vk: {
      enabled: true,
      appId: 'your_vk_app_id'
    },
    facebook: {
      enabled: true,
      appId: 'your_facebook_app_id'
    },
    telegram: {
      enabled: true
    },
    whatsapp: {
      enabled: true
    }
  }
}

// Функции для генерации ссылок шеринга
export const generateShareUrl = (platform, url, text) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(text)

  const shareUrls = {
    vk: `https://vk.com/share.php?url=${encodedUrl}&title=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
  }

  return shareUrls[platform] || ''
}
