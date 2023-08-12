export type AppConfigType = {
  theme: 'system' | 'light' | 'dark';
  language: 'system' | 'user';
  userSelectedLanguage: string | null;
  apiServerUrl: 'default' | 'user';
  userApiServerUrl: string | null;
};
