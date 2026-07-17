export const resources = {
  en: {
    translation: {
      hero: {
        brand: 'Lykke',
        caption:
          'A personal portfolio for selected projects, experiments, and notes.',
        shortCaption: 'Selected projects, experiments, and notes.',
        github: 'Github',
        menuMark: '///',
      },
      languageSwitcher: {
        label: 'Language',
      },
    },
  },
  zh: {
    translation: {
      hero: {
        brand: 'Lykke',
        caption: '一个展示精选项目、实验和笔记的个人作品集。',
        shortCaption: '精选项目、实验和笔记。',
        github: 'Github',
        menuMark: '///',
      },
      languageSwitcher: {
        label: '语言',
      },
    },
  },
  de: {
    translation: {
      hero: {
        brand: 'Lykke',
        caption:
          'Ein persönliches Portfolio für ausgewählte Projekte, Experimente und Notizen.',
        shortCaption: 'Ausgewählte Projekte, Experimente und Notizen.',
        github: 'Github',
        menuMark: '///',
      },
      languageSwitcher: {
        label: 'Sprache',
      },
    },
  },
};

export const languageOptions = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'de', label: 'DE' },
];

export const supportedLanguages = languageOptions.map(({ code }) => code);
