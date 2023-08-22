import { configureStore } from '@reduxjs/toolkit';

/* Slices */
import appConfigReducer from './slices/AppConfig';
import { recentUpdatesCarouselReducer } from '@/containers/RecentUpdatesCarousel';
import { displayReleaseReducer } from '@/containers/DisplayRelease';
import { catalogViewerReducer } from '@/containers/CatalogViewer';

/* Configure store */
const store = configureStore({
  reducer: {
    appConfigReducer,
    recentUpdatesCarouselReducer,
    displayReleaseReducer,
    catalogViewerReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
