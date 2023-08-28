import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

type SearchViewerProps = {
  query: string | null;
};

const SearchViewer = ({ query }: SearchViewerProps) => {
  return <div>{query}</div>;
};

export default SearchViewer;
