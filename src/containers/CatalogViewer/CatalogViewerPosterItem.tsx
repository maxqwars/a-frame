/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ThemeContext } from '@/context/ThemeContext';
import cn from 'classnames';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PosterImage } from '@/components/PosterImage';

type CatalogViewerPosterItemProps = {
  image?: string;
  alt?: string;
  code?: string;
};

const CatalogViewerPosterItem = ({ image, alt, code }: CatalogViewerPosterItemProps) => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className={cn('catalog-viewer__poster-wrapper')} onClick={() => navigate(`/release/${code}`)}>
      <PosterImage
        className={cn('catalog-viewer__poster-image', {
          [`catalog-viewer__poster-image_${theme}`]: theme,
        })}
        src={`https://static.wwnd.space/${image}`}
        alt={alt || ''}
      />
    </div>
  );
};

export default CatalogViewerPosterItem;
