import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Announce from '@/components/Announce';
import { Navbar, NavbarLink } from '@/components/Navbar';
import { ThemeContext } from '@/context/ThemeContext';

import AppLogo from '@/assets/mizuhiki-logo.svg';

const AnnounceView = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  console.log(`Current color theme ${theme}`);

  return (
    <div>
      <Navbar image={AppLogo}>
        <NavbarLink isActive>Home</NavbarLink>
        <NavbarLink>About</NavbarLink>
        <NavbarLink to="/debug">Debug</NavbarLink>
      </Navbar>
      <Announce />
    </div>
  );
};

export default AnnounceView;
