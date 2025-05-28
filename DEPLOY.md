# Инструкция по развертыванию на GitHub Pages

## Автоматическая настройка завершена!

Все необходимые файлы для развертывания на GitHub Pages созданы:

### ✅ Что уже настроено:
- `vite.config.js` - обновлен с правильным base path `/wedding/`
- `.github/workflows/deploy.yml` - GitHub Actions для автоматического деплоя
- `package.json` - добавлен скрипт `deploy`
- `.nojekyll` - файл для корректной работы с ассетами

## 📋 Следующие шаги:

### 1. Загрузите код в GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. Настройте GitHub Pages в репозитории
1. Перейдите в ваш репозиторий: https://github.com/basovanton16/wedding/
2. Откройте **Settings** (Настройки)
3. В левом меню найдите **Pages**
4. В разделе **Source** выберите **Deploy from a branch**
5. Выберите ветку **gh-pages**
6. Нажмите **Save**

### 3. Дождитесь деплоя
- GitHub Actions автоматически соберет и задеплоит ваш сайт
- Процесс займет 2-5 минут
- Статус можно отслеживать во вкладке **Actions**

## 🌐 Результат
После успешного деплоя ваш сайт будет доступен по адресу:
**https://basovanton16.github.io/wedding/**

## 🔄 Автоматические обновления
Теперь при каждом push в ветку `main` сайт будет автоматически пересобираться и обновляться на GitHub Pages.

## 🛠 Локальная сборка (опционально)
Для тестирования production билда локально:
```bash
npm run build
npm run preview
