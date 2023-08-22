import { ReactNode, useContext } from 'react';
import cn from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';
import { useHref, useLocation, useNavigate } from 'react-router-dom';

type BottomNavigationItemProps = {
  to: string;
  label: string;
  icon: ReactNode;
};

const BottomNavigationItem = ({ to, label, icon }: BottomNavigationItemProps) => {
  const theme = useContext(ThemeContext);
  const href = useHref(to);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <button onClick={() => navigate(href)} className={cn('bottom-navigation__item')}>
      <div
        className={cn('bottom-navigation__item-icon', {
          [`bottom-navigation__item-icon_${theme}`]: theme,
          'bottom-navigation__item-icon_active': isActive,
        })}
      >
        {icon}
      </div>
      <div
        className={cn('bottom-navigation__item-label', {
          [`bottom-navigation__item-label_${theme}`]: theme,
          'bottom-navigation__item-label_active': isActive,
        })}
      >
        {label}
      </div>
    </button>
  );
};

export default BottomNavigationItem;
