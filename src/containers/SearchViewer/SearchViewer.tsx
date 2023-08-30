import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { searchViewerActions } from './';
import { search } from '@/api/anilibria';
import { PostersGrid } from '@/components/PostersGrid';
import { LoadSpinner } from '@/components/LoadSpinner';

type SearchViewerProps = {
  query: string;
};

const SearchViewer = ({ query }: SearchViewerProps) => {
  const dispatch = useAppDispatch();
  const { searchQuery, searchResults, isLoaded } = useAppSelector((state) => state.searchViewier);
  const { setSearchQuery, setSearchResults, setIsLoaded } = searchViewerActions;

  const requestData = useCallback(() => {
    dispatch(setIsLoaded(false));
    search(searchQuery || '').then((response) => {
      const { data } = response;
      dispatch(setSearchResults(data?.list || []));
      setTimeout(() => {
        dispatch(setIsLoaded(true));
      }, 1500);
    });
  }, [dispatch, searchQuery, setIsLoaded, setSearchResults]);

  useEffect(() => {
    dispatch(setSearchQuery(query));

    if (searchQuery) {
      requestData();
    }
  }, [dispatch, query, requestData, searchQuery, setSearchQuery]);

  return (
    <>
      {searchResults !== null && isLoaded ? <PostersGrid items={searchResults} /> : null}
      {!isLoaded ? <LoadSpinner /> : null}
    </>
  );
};

export default SearchViewer;
