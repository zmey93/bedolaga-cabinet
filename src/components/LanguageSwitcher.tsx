import { useTranslation } from 'react-i18next';

// zmey: restored switcher, RU-only — no other languages available
const LANGUAGES = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium select-none opacity-80 cursor-default">
      <span>{LANGUAGES[0].flag}</span>
      <span>{LANGUAGES[0].label}</span>
    </div>
  );
}
