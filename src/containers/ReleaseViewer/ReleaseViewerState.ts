import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ReleaseViewerState = {
  code: string | null;
};

const initialState = {
  code: null,
} as ReleaseViewerState;

const releaseViewerState = createSlice({
  name: 'release-viewer',
  initialState,
  reducers: {},
});

export default releaseViewerState.reducer;
