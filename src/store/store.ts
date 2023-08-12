import { configureStore } from '@reduxjs/toolkit';

/* Slices */
import appConfigReducer from './slices/AppConfig';

/* Configure store */
const store = configureStore({
  reducer: { appConfigReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
