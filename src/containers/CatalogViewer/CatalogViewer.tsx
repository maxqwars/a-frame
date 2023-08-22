import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPage, setItems, setError, setIsLoad } from './';
import { getCatalog } from '@/api/getCatalog';

type CatalogViewerProps = {
  currentPage: number;
  itemsPerPage: number;
};

const CatalogViewer = ({ currentPage, itemsPerPage }: CatalogViewerProps) => {
  const dispatch = useAppDispatch();
  const { page, items } = useAppSelector((state) => state.catalogViewerReducer);

  const update = useCallback(() => {
    setIsLoad(false);
    getCatalog(itemsPerPage, page, itemsPerPage).then(({ error, data }) => {
      console.log(`Page ${page} of ${data?.pagination?.pages}`);
      console.log(data?.pagination);

      if (error) dispatch(setError(error));
      if (!error) dispatch(setItems(data?.list || []));
      dispatch(setIsLoad(true));
    });
  }, [dispatch, itemsPerPage, page]);

  useEffect(() => {
    dispatch(setPage(currentPage));
    update();
  }, [currentPage, dispatch, update]);

  return (
    <div>
      {items.map((release) => (
        <img key={release.id} src={`https://static.wwnd.space/${release.posters?.original?.url as string}`} />
      ))}
    </div>
  );
};

export default CatalogViewer;
