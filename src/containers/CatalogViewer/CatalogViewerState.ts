// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Objects, METAFORM_ERROR } from '@maxqwars/metaform/metaform3';

type CatalogViewType = {
  page: number;
  items: Objects.Title[];
  isLoaded: boolean;
  error: METAFORM_ERROR | null;
  pages: number;
};

const initialState = {
  page: 1,
  items: [],
  isLoaded: false,
  error: null,
  pages: 0,
} as CatalogViewType;

const catalogViewerState = createSlice({
  name: 'catalog-viewer',
  initialState,
  reducers: {
    setPage(state: CatalogViewType, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setItems(state: CatalogViewType, action: PayloadAction<Objects.Title[]>) {
      state.items = action.payload;
    },
    setIsLoad(state: CatalogViewType, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
    setError(state: CatalogViewType, action: PayloadAction<METAFORM_ERROR | null>) {
      state.error = action.payload;
    },
    setPages(state: CatalogViewType, action: PayloadAction<number>) {
      state.pages = action.payload;
    },
  },
});

export const { setPage, setItems, setIsLoad, setError, setPages } = catalogViewerState.actions;
export default catalogViewerState.reducer;
