// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ReleaseType = {
  id: number;
  name: string;
  code: string;
  imageUrl: string;
};

type RecentUpdatesCarouselState = {
  loaded: boolean;
  releases: ReleaseType[] | [];
};

const initialState = {
  loaded: false,
  releases: [],
} as RecentUpdatesCarouselState;

const recentUpdatesCarousel = createSlice({
  name: 'recent-updates-carousel',
  initialState,
  reducers: {
    setLoaded(state: RecentUpdatesCarouselState, action: PayloadAction<boolean>) {
      state.loaded = action.payload;
    },

    setReleases(state: RecentUpdatesCarouselState, action: PayloadAction<ReleaseType[]>) {
      state.releases = action.payload;
    },
  },
});

export const { setLoaded, setReleases } = recentUpdatesCarousel.actions;
export default recentUpdatesCarousel.reducer;
