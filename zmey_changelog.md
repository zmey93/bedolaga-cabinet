# ZMEY CHANGELOG — bedolaga-cabinet (fork)

История изменений в форке [`zmey93/bedolaga-cabinet`](https://github.com/zmey93/bedolaga-cabinet) относительно оригинального репозитория [`BEDOLAGA-DEV/bedolaga-cabinet`](https://github.com/BEDOLAGA-DEV/bedolaga-cabinet).

---

## [1.0.0] — 2026-03-12

### Форк создан
- Форкнут репозиторий `BEDOLAGA-DEV/bedolaga-cabinet`.
- Используется для сборки кабинета из исходников через `manage-server2.sh` (скрипт управления сервером).

### Изменено
- **`src/components/LanguageSwitcher.tsx`**: компонент выбора языка скрыт — заменён на `return null`.
  - Убран переключатель языков (RU / EN / ZH / FA) из интерфейса.
  - Компонент сохранён в файловой структуре для совместимости с импортами в других местах.
- **`src/components/layout/AppShell/AppHeader.tsx`**: удалены импорт и использование `<LanguageSwitcher />` из мобильного хедера.
  - Убран `import LanguageSwitcher from '@/components/LanguageSwitcher'`.
  - Убран блок `<div onClick={...}><LanguageSwitcher /></div>` из правой части хедера.
