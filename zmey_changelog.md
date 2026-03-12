# ZMEY CHANGELOG — bedolaga-cabinet (fork)

История изменений форка [`zmey93/bedolaga-cabinet`](https://github.com/zmey93/bedolaga-cabinet) относительно оригинала [`BEDOLAGA-DEV/bedolaga-cabinet`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet).

Формат тегов: `v{upstream}z{zmey}` — например `v1.32.0z0.1`

---

## [v1.32.0z0.1] — 2026-03-12

### Upstream
- База: [`BEDOLAGA-DEV/bedolaga-cabinet v1.32.0`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet/releases/tag/v1.32.0)

### Добавлено в форке
- **`.github/workflows/`**: настроен CI/CD — автобилд Docker, авторелиз, lint, ci
- **`src/components/LanguageSwitcher.tsx`**: компонент восстановлен, но отображает только русский язык (🇷🇺 Русский).
  - Убран список языков en / zh / fa — остался только `ru`.
  - Переключение языков недоступно (cursor-default).
- **`src/i18n.ts`**: удалены импорты `en`, `zh`, `fa`.
  - `supportedLngs: ['ru']`, `lng: 'ru'`, `fallbackLng: 'ru'`.
  - Уменьшает размер бандла.

---

<!-- Новые секции добавляй выше этой строки в формате ## [vX.Y.ZzN.M] — YYYY-MM-DD -->
