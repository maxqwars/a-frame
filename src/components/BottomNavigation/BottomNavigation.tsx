import { ReactNode, useContext } from 'react';
import cn from 'classnames';
import './BottomNavigation.css';
import { ThemeContext } from '@/context/ThemeContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';

type BottomNavigationProps = {
  children?: ReactNode | ReactNode[];
};

const BottomNavigation = ({ children }: BottomNavigationProps) => {
  const theme = useContext(ThemeContext);
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={cn('bottom-navigation', {
        [`bottom-navigation_${theme}`]: theme,
        'bottom-navigation_hidden': scrollDirection === 'down',
      })}
    >
      {children}
    </div>
  );
};

export default BottomNavigation;
