import cn from 'classnames';

import { ReleasesCarouselItemType } from './types';

import ReleasesCarouselItem from './ReleasesCarouselItem';
import ReleaseCarouselPlaceholder from './ReleaseCarouselPlaceholder';

import './ReleasesCarousel.css';

type ReleasesCarouselProps = {
  items: ReleasesCarouselItemType[];
};

const ReleasesCarousel = ({ items }: ReleasesCarouselProps) => {
  return (
    <div className={cn('release-carousel')}>
      {items.length > 0 ? (
        items.map((release) => <ReleasesCarouselItem key={release.id} data={release} />)
      ) : (
        <ReleaseCarouselPlaceholder />
      )}
    </div>
  );
};

export default ReleasesCarousel;
