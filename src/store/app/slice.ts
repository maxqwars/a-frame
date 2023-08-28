// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IApp {
  theme: 'auto' | 'light' | 'dark';
  language: 'auto' | string;
  apiServerUrl: 'default' | string;
  staticAssetsUrl: 'default' | string;
}

const initialState: IApp = {
  theme: 'auto',
  language: 'auto',
  apiServerUrl: 'default',
  staticAssetsUrl: 'default',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state: IApp, action: PayloadAction<'auto' | 'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state: IApp, action: PayloadAction<'auto' | string>) => {
      state.language = action.payload;
    },
    setApiServerUrl: (state: IApp, action: PayloadAction<'auto' | string>) => {
      state.apiServerUrl = action.payload;
    },
    setStaticAssetsUrl: (state: IApp, action: PayloadAction<'default' | string>) => {
      state.staticAssetsUrl = action.payload;
    },
  },
});

export const { actions: AppActions, reducer: appReducer } = appSlice;
