import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPage, setItems, setError, setIsLoad } from './';
import { getCatalog } from '@/api/getCatalog';
import CatalogViewerPosterItem from './CatalogViewerPosterItem';
import CatalogViewerPagination from './CatalogViewerPagination';

import cn from 'classnames';

import './CatalogViewer.css';
import { setPages } from './CatalogViewerState';

type CatalogViewerProps = {
  currentPage: number;
  itemsPerPage: number;
};

const CatalogViewer = ({ currentPage, itemsPerPage }: CatalogViewerProps) => {
  const dispatch = useAppDispatch();
  const { page, items, pages } = useAppSelector((state) => state.catalogViewerReducer);

  console.log(`CATALOG_VIEWER: ${page} / ${pages}`);

  const fetchDataFromApi = useCallback(() => {
    setIsLoad(false);
    getCatalog(itemsPerPage, currentPage, itemsPerPage)
      .then(({ error, data }) => {
        if (!error) {
          dispatch(setPage(currentPage));
          dispatch(setPages(data?.pagination?.pages || 0));
          dispatch(setItems(data?.list || []));
          dispatch(setError(error));
        }

        dispatch(setIsLoad(true));
      })
      .catch(() => {
        dispatch(setIsLoad(false));
        setTimeout(() => {
          location.reload();
        }, 3000);
      });
  }, [currentPage, dispatch, itemsPerPage]);

  useEffect(() => {
    dispatch(setPage(currentPage));
    fetchDataFromApi();
  }, [currentPage, dispatch, fetchDataFromApi, page]);

  return (
    <div className={cn('catalog-viewer')}>
      <CatalogViewerPagination currentPage={page} countOfPages={pages} />

      <div className={cn('catalog-viewer__grid-container')}>
        {items.map((release) => (
          <CatalogViewerPosterItem
            key={release.code}
            code={release.code}
            image={release.posters?.original?.url as string}
            alt={release.names?.en}
          />
        ))}
      </div>

      <CatalogViewerPagination currentPage={page} countOfPages={pages} />
    </div>
  );
};

export default CatalogViewer;
