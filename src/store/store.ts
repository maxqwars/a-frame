import { configureStore } from '@reduxjs/toolkit';

/* Slices */
import { recentUpdatesCarouselReducer } from '@/containers/RecentUpdatesCarousel';
import { displayReleaseReducer } from '@/containers/DisplayRelease';
import { catalogViewerReducer } from '@/containers/CatalogViewer';
import { releaseViewerReducer } from '@/containers/ReleaseViewer';
import { searchViewerReducer } from '@/containers/SearchViewer';
import { appReducer } from '../models/AppModel/slice';

/* Configure store */
const store = configureStore({
  reducer: {
    recentUpdatesCarouselReducer,
    displayReleaseReducer,
    catalogViewerReducer,
    releaseViewerReducer,
    searchViewier: searchViewerReducer,
    app: appReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
