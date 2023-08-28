import { useContext } from 'react';
import cn from 'classnames';

import { ThemeContext } from '@/context/ThemeContext';

import './LoadSpinner.css';

const LoadSpinner = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={cn('loader', {
        [`loader_${theme}`]: theme,
      })}
    >
      Loading...
    </div>
  );
};

export default LoadSpinner;
