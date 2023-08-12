// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppConfig {
  theme: 'light' | 'dark' | 'system';
  language: 'system' | 'selected';
}

const initialState = {
  theme: 'system',
  language: 'system',
} as IAppConfig;

const appConfig = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setTheme(state: IAppConfig, action: PayloadAction<'light' | 'dark' | 'system'>) {
      state.theme = action.payload;
    },
    setLanguage(state: IAppConfig, action: PayloadAction<'system' | 'selected'>) {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage } = appConfig.actions;
export default appConfig.reducer;
