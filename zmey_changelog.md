# ZMEY CHANGELOG — bedolaga-cabinet (fork)
## Проверка автосборки
История изменений в форке [`zmey93/bedolaga-cabinet`](https://github.com/zmey93/bedolaga-cabinet) относительно оригинального репозитория [`BEDOLAGA-DEV/bedolaga-cabinet`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet).

---

## [1.1.0] — 2026-03-12

### Изменено
- **`src/components/LanguageSwitcher.tsx`**: компонент восстановлен, но отображает только русский язык (🇷🇺 Русский).
  - Убран список языков ен / zh / fa — остался только `ru`.
  - Переключение языков недоступно (компонент визуальный, но `cursor-default`).
- **`src/i18n.ts`**: удалены импорты `en`, `zh`, `fa` и соответствующие ресурсы.
  - `supportedLngs: ['ru']`, `lng: 'ru'`, `fallbackLng: 'ru'`.
  - Уменьшает размер бандла (убраны 3 JSON-локали из сборки).

---

## [1.0.0] — 2026-03-12

### Форк создан
- Форкнут репозиторий `BEDOLAGA-DEV/bedolaga-cabinet`.
- Используется для сборки кабинета из исходников через `manage-server2.sh`.

### Изменено
- **`src/components/LanguageSwitcher.tsx`**: компонент выбора языка скрыт — заменён на `return null`.
  - Убран переключатель языков (RU / EN / ZH / FA) из интерфейса.
  - Компонент сохранён в файловой структуре для совместимости с импортами.
- **`src/components/layout/AppShell/AppHeader.tsx`**: удалены импорт и использование `<LanguageSwitcher />` из мобильного хедера.
