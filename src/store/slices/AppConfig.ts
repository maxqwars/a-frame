// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppConfigType } from '@/types/AppConfigType';

const initialState = {
  theme: 'system',
  language: 'system',
} as AppConfigType;

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
      state = action.payload;
    },
  },
});

export const { setTheme, setLanguage, setConfig } = appConfig.actions;
export default appConfig.reducer;
