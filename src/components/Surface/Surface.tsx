import { ReactNode, useContext } from 'react';
import cn from 'classnames';

import './Surface.css';
import { ThemeContext } from '@/context/ThemeContext';

type SurfaceProps = {
  children?: ReactNode | ReactNode[];
  shape?: 'small' | 'medium' | 'heavy';
  padding?: 5 | 10;
};

const Surface = ({ children, shape, padding = 5 }: SurfaceProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={cn('surface', {
        [`surface_variant-${theme}`]: theme,
        [`surface_shape-${shape}`]: shape,
        [`surface_padding-${padding}`]: padding,
      })}
    >
      {children}
    </div>
  );
};

export default Surface;
