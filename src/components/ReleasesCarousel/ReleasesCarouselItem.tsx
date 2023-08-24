/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { PosterImage } from '@/components/PosterImage';

import { ReleasesCarouselItemType } from './types';

type ReleasesCarouselItemProps = {
  data: ReleasesCarouselItemType;
};

const ReleasesCarouselItem = ({ data }: ReleasesCarouselItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn('release-carousel__item')}
      onClick={() => {
        navigate(`/release/${data.code}`);
      }}
    >
      <PosterImage className={cn('release-carousel__image')} src={data.imageUrl} alt={data.name} />
    </div>
  );
};

export default ReleasesCarouselItem;
