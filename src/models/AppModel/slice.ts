// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IApp,
  DEFAULT_APP_VALUES,
  ThemeType,
  LanguageType,
  ApiServerType,
  StaticServerType,
} from '@/models/AppModel/AppModel';

const appSlice = createSlice({
  name: 'app',
  initialState: DEFAULT_APP_VALUES,
  reducers: {
    setTheme: (state: IApp, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
    setLanguage: (state: IApp, action: PayloadAction<LanguageType>) => {
      state.language = action.payload;
    },
    setApiServerUrl: (state: IApp, action: PayloadAction<ApiServerType>) => {
      state.apiServerUrl = action.payload;
    },
    setStaticAssetsUrl: (state: IApp, action: PayloadAction<StaticServerType>) => {
      state.staticServerUrl = action.payload;
    },
    setCustomLanguage: (state: IApp, action: PayloadAction<null | string>) => {
      state.customLanguage = action.payload;
    },
    setCustomApiServerUrl: (state: IApp, action: PayloadAction<null | string>) => {
      state.customApiServerUrl = action.payload;
    },
    setCustomStaticServerUrl: (state: IApp, action: PayloadAction<null | string>) => {
      state.customStaticServerUrl = action.payload;
    },
    setAll: (state: IApp, action: PayloadAction<IApp>) => {
      state = action.payload;
    },
  },
});

export const { actions: appActions, reducer: appReducer } = appSlice;
