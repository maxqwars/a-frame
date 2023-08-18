import cn from 'classnames';
import { useContext } from 'react';

import { ThemeContext } from '@/context/ThemeContext';

const ReleaseCarouselPlaceholder = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={cn('release-carousel__placeholder', {
        [`release-carousel__placeholder_${theme}`]: theme,
      })}
    >
      Loading...
    </div>
  );
};

export default ReleaseCarouselPlaceholder;
