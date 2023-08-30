/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { PosterImage } from '@/components/PosterImage';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

type PostersGridPosterProps = {
  image?: string;
  alt?: string;
  code?: string;
};

const PostersGridPoster = ({ image, alt, code }: PostersGridPosterProps) => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className={cn('posters-grid__poster-wrapper')} onClick={() => navigate(`/release/${code}`)}>
      <PosterImage
        className={cn('posters-grid__poster-image', {
          [`posters-grid__poster-image_${theme}`]: theme,
        })}
        assetId={image as string}
        alt={alt || ''}
      />
    </div>
  );
};

export default PostersGridPoster;
