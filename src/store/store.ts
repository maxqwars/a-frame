import { configureStore } from '@reduxjs/toolkit';

/* Slices */
import appConfigReducer from './slices/AppConfig';
import { RecentUpdatesCarouselReducer } from '@/components/RecentUpdatesCarousel';

/* Configure store */
const store = configureStore({
  reducer: { appConfigReducer, RecentUpdatesCarouselReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
