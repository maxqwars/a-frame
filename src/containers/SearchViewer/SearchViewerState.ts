/* eslint-disable import/named */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Objects } from '@maxqwars/metaform/metaform3';

export interface ISearchViewerSlice {
  searchQuery: string | null;
  searchResults: Objects.Title[] | null;
}

const initialState: ISearchViewerSlice = {
  searchQuery: null,
  searchResults: null,
};

export const searchViewerSlice = createSlice({
  name: 'search-viewer',
  initialState,
  reducers: {
    setSearchQuery: (state: ISearchViewerSlice, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state: ISearchViewerSlice, action: PayloadAction<Objects.Title[] | null>) => {
      state.searchResults = action.payload;
    },
  },
});

export const { actions: searchViewerActions, reducer: searchViewerReducer } = searchViewerSlice;
