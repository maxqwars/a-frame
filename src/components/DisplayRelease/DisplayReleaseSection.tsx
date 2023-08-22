import { ReactNode, useContext } from 'react';
import cn from 'classnames';

import { ThemeContext } from '@/context/ThemeContext';

type DisplayReleaseProps = { children?: ReactNode };

const DisplayReleaseSection = ({ children }: DisplayReleaseProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={cn('display-release__section', {
        [`display-release__section_${theme}`]: theme,
      })}
    >
      {children}
    </div>
  );
};

export default DisplayReleaseSection;
