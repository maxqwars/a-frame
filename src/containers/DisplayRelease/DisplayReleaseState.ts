// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ReleaseDataType = {
  code: string;
  name: string;
  desc: string;
  genres: string;
  inFavorites: number;
  changedAt: number;
  posterImageUrl: string;
};

type DisplayReleaseState = {
  currentCode: null | string;
  loaded: boolean;
  releaseData: null | ReleaseDataType;
};

const initialState = { currentCode: null, loaded: false, releaseData: null } as DisplayReleaseState;

const displayReleaseStore = createSlice({
  name: 'display-release',
  initialState,
  reducers: {
    setCurrentCode(state: DisplayReleaseState, action: PayloadAction<string>) {
      state.currentCode = action.payload;
    },

    setLoaded(state: DisplayReleaseState, action: PayloadAction<boolean>) {
      state.loaded = action.payload;
    },

    setRelease(state: DisplayReleaseState, action: PayloadAction<ReleaseDataType>) {
      state.releaseData = action.payload;
    },
  },
});

export const { setLoaded, setRelease, setCurrentCode } = displayReleaseStore.actions;
export default displayReleaseStore.reducer;
