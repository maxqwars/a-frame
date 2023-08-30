import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import App from './App.tsx';
import initI18n from '@/i18n';
import store from '@/store/store';
import { appModel } from '@/models/AppModel/AppModel.ts';
import { appActions } from '@/models/AppModel/slice.ts';

import './main.css';

/* Set language */
const i18n = initI18n(appModel.language === 'auto' ? undefined : (appModel.customLanguage as string));

function init() {
  store.dispatch(appActions.setAll(appModel.config));
}

init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
);
