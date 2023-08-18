import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { Navbar, NavbarLink } from '@/components/Navbar';
import logo from '@/assets/mizuhiki-logo.svg';

const NavigationLayout = () => {
  const { t } = useTranslation(); // WARN: This component use useTranslation()
  const { pathname } = useLocation();

  return (
    <Navbar image={logo}>
      <NavbarLink to="/" isActive={pathname === '/'}>
        {t('nav-home-label')}
      </NavbarLink>

      <NavbarLink to="/catalog" isActive={pathname === '/catalog'}>
        {t('nav-catalog-label')}
      </NavbarLink>

      <NavbarLink to="/bookmarks" isActive={pathname === '/bookmarks'}>
        {t('nav-bookmarks-label')}
      </NavbarLink>

      <NavbarLink to="/settings" isActive={pathname === '/settings'}>
        {t('nav-settings-label')}
      </NavbarLink>
    </Navbar>
  );
};

export default NavigationLayout;
