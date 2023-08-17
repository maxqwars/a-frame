import { ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';

type NavbarLinkProp = {
  to?: string;
  isActive?: boolean;
  children?: ReactNode;
};

const NavbarLink = ({ to = '/', isActive = false, children }: NavbarLinkProp) => {
  const theme = useContext(ThemeContext);

  return (
    <Link
      className={cn('navbar__link', {
        [`navbar__link--${theme}`]: theme,
        [`navbar__link--active-${theme}`]: isActive,
      })}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
