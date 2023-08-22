import { configureStore } from '@reduxjs/toolkit';

/* Slices */
import appConfigReducer from './slices/AppConfig';
import { RecentUpdatesCarouselReducer } from '@/components/RecentUpdatesCarousel';
import { DisplayReleaseReducer } from '@/components/DisplayRelease';

/* Configure store */
const store = configureStore({
  reducer: { appConfigReducer, RecentUpdatesCarouselReducer, DisplayReleaseReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
