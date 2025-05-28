# Инструкция по развертыванию на GitHub Pages

## ✅ Упрощенная настройка завершена!

Проект перенастроен для более простого деплоя через папку `/docs`:

### Что изменилось:
- `vite.config.js` - сборка теперь идет в папку `docs` вместо `dist`
- `.gitignore` - папка `docs` больше не игнорируется
- Удален проблемный GitHub Actions workflow
- Добавлен `.nojekyll` в папку `docs`

## 📋 Следующие шаги:

### 1. Загрузите изменения в GitHub
```bash
git add .
git commit -m "Switch to docs folder deployment"
git push origin main
```

### 2. Измените настройки GitHub Pages
1. Перейдите в настройки: https://github.com/basovanton16/wedding/settings/pages
2. В разделе **Source** выберите **"Deploy from a branch"**
3. В разделе **Branch** выберите **"main"**
4. В разделе **Folder** выберите **"/docs"** (вместо "/ (root)")
5. Нажмите **Save**

### 3. Дождитесь обновления
- GitHub Pages автоматически обновит сайт из папки `/docs`
- Процесс займет 1-2 минуты
- Статус можно отслеживать во вкладке **Actions**

## 🌐 Результат
Ваш сайт останется доступен по тому же адресу:
**https://basovanton16.github.io/wedding/**

## 🔄 Обновления в будущем
Для обновления сайта:
```bash
npm run build          # Собрать проект в папку docs
git add docs/          # Добавить изменения
git commit -m "Update site"
git push origin main   # Загрузить на GitHub
```

## Преимущества нового подхода:
- ✅ Нет дополнительных веток
- ✅ Простая отладка
- ✅ Быстрый деплой
- ✅ Меньше настроек
