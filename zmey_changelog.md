# ZMEY CHANGELOG — bedolaga-cabinet (fork)

История изменений форка [`zmey93/bedolaga-cabinet`](https://github.com/zmey93/bedolaga-cabinet) относительно оригинала [`BEDOLAGA-DEV/bedolaga-cabinet`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet).

Формат тегов: `v{upstream}z{zmey}` — например `v1.32.0z0.1`

---

## [v1.32.0z0.2] — 2026-03-12

### Upstream
- База: [`BEDOLAGA-DEV/bedolaga-cabinet v1.32.0`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet/releases/tag/v1.32.0)

### Исправлено
- **`.github/workflows/docker.yml`**: добавлен шаг `Get version info` — теперь докер-образ получает тег `v1.32.0z0.1-{sha}` вместо `sha-xxxxxxx`
  - Версия upstream читается из `package.json`
  - Версия форка читается из `.zmey_version`
  - Добавлен `fetch-depth: 0` в checkout
  - Добавлен шаг `Build Summary` в отчёт Actions

---

## [v1.32.0z0.1] — 2026-03-12

### Upstream
- База: [`BEDOLAGA-DEV/bedolaga-cabinet v1.32.0`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet/releases/tag/v1.32.0)

### Добавлено в форке
- **`.github/workflows/`**: настроен CI/CD — автобилд Docker в GHCR, авторелиз `zmey-release.yml` с форматом `vX.Y.ZzN`
- **`package.json`**: версия восстановлена до `1.32.0` (была сбита на `0.1.0` из-за бага release-please)
- **`src/components/LanguageSwitcher.tsx`**: компонент восстановлен, отображает только русский язык (🇷🇺 Русский).
  - Убран список языков en / zh / fa
- **`src/i18n.ts`**: `supportedLngs: ['ru']`, `lng: 'ru'`, `fallbackLng: 'ru'`

---

<!-- Новые секции добавляй выше этой строки:
## [v1.43.1z0.1] — 2026-04-01

### Upstream
- База: [`BEDOLAGA-DEV/bedolaga-cabinet v1.43.1`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet/releases/tag/v1.43.1)

### Слияние и правки
- **Слияние upstream**: Обновление с 1.32.0 до 1.43.1
- **Конфликты**:
  - `LanguageSwitcher.tsx`: оставлен только русский язык (RU-only).
  - `Connection.tsx`: скрыта кнопка "qr код" как и раньше.

---

## [vX.Y.ZzN] — YYYY-MM-DD
### Upstream
- База: BEDOLAGA-DEV v...
### Исправлено / Добавлено
- ...
-->
