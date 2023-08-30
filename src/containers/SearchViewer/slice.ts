/* eslint-disable import/named */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Objects } from '@maxqwars/metaform/metaform3';

export interface ISearchViewerSlice {
  searchQuery: string | null;
  searchResults: Objects.Title[] | null;
  isLoaded: boolean;
}

const initialState: ISearchViewerSlice = {
  searchQuery: null,
  searchResults: null,
  isLoaded: false,
};

export const searchViewerSlice = createSlice({
  name: 'search-viewer',
  initialState,
  reducers: {
    setSearchQuery: (state: ISearchViewerSlice, action: PayloadAction<string | null>) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state: ISearchViewerSlice, action: PayloadAction<Objects.Title[] | null>) => {
      state.searchResults = action.payload;
    },
    setIsLoaded: (state: ISearchViewerSlice, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { actions: searchViewerActions, reducer: searchViewerReducer } = searchViewerSlice;
