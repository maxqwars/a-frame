// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppConfigType } from '@/types/AppConfigType';
import { DEF_APP_CONF } from '@/constants/DEF_APP_CONF';

const initialState = DEF_APP_CONF;

const appConfig = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setTheme(state: AppConfigType, action: PayloadAction<'light' | 'dark' | 'system'>) {
      state.theme = action.payload;
    },
    setLanguage(state: AppConfigType, action: PayloadAction<'system' | 'user'>) {
      state.language = action.payload;
    },
    setConfig(state: AppConfigType, action: PayloadAction<AppConfigType>) {
      const { theme, language, userApiServerUrl, userSelectedLanguage, apiServerUrl } = action.payload;

      state.theme = theme;
      state.language = language;
      state.userApiServerUrl = userApiServerUrl;
      state.userSelectedLanguage = userSelectedLanguage;
      state.apiServerUrl = apiServerUrl;
    },
  },
});

export const { setTheme, setLanguage, setConfig } = appConfig.actions;
export default appConfig.reducer;
