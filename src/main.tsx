import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import App from './App.tsx';
import initI18n from '@/i18n';
import store from '@/store/store';
import { appConfigModel } from '@/models/AppConfigModel';
import { setConfig } from '@/store/slices/AppConfig.ts';

import './global.css';

/* Set language */
const i18n = initI18n(
  appConfigModel.language === 'system' ? undefined : (appConfigModel.userSelectedLanguage as string),
);

/* Set config */
store.dispatch(setConfig(appConfigModel.raw()));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
);
