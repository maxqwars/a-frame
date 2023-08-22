import { configureStore } from '@reduxjs/toolkit';

/* Slices */
import appConfigReducer from './slices/AppConfig';
import { recentUpdatesCarouselReducer } from '@/containers/RecentUpdatesCarousel';
import { displayReleaseReducer } from '@/containers/DisplayRelease';

/* Configure store */
const store = configureStore({
  reducer: { appConfigReducer, recentUpdatesCarouselReducer, displayReleaseReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
