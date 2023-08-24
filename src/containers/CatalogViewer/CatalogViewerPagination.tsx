import { ThemeContext } from '@/context/ThemeContext';
import cn from 'classnames';
import { useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

type CatalogViewerPaginationProps = {
  currentPage: number;
  countOfPages: number;
};

const CatalogViewerPagination = ({ currentPage, countOfPages }: CatalogViewerPaginationProps) => {
  const theme = useContext(ThemeContext);

  console.log(`PAGINATION: ${currentPage} / ${countOfPages}`);

  return (
    <div className={cn('catalog-viewer__pagination-wrapper')}>
      <Link
        className={cn('catalog-viewer__button', {
          'catalog-viewer__button_disable': currentPage === 1,
          [`catalog-viewer__button_${theme}`]: theme,
        })}
        to={`/catalog?page=${currentPage - 1}`}
      >
        <ChevronLeft />
      </Link>

      <div className={cn('catalog-viewer__current-and-all-pages')}>
        {currentPage} / {countOfPages}
      </div>

      <Link
        className={cn('catalog-viewer__button', {
          // 'catalog-viewer__button_disable': currentPage > 1,
          [`catalog-viewer__button_${theme}`]: theme,
        })}
        to={`/catalog?page=${currentPage + 1}`}
      >
        <ChevronRight />
      </Link>
    </div>
  );
};

export default CatalogViewerPagination;
