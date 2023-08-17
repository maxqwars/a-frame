import { ReactNode, useContext } from 'react';
import cn from 'classnames';

import { ThemeContext } from '@/context/ThemeContext';
import { NavbarBrand, NavbarSearch } from './';

import './Navbar.css';

type NavbarProps = {
  image: string;
  children?: ReactNode;
};

const Navbar = ({ children, image }: NavbarProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={cn('navbar', {
        [`navbar--${theme}`]: theme,
      })}
    >
      <NavbarBrand image={image} />
      <div className={cn('navbar__links-container')}>{children}</div>
      <NavbarSearch />
    </div>
  );
};

export default Navbar;
