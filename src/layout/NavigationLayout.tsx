import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { Navbar, NavbarLink } from '@/components/Navbar';
import logo from '@/assets/mizuhiki-logo.svg';

const NavigationLayout = () => {
  const { t } = useTranslation('NavigationLayout'); // WARN: This component use useTranslation()
  const { pathname } = useLocation();

  return (
    <Navbar image={logo}>
      <NavbarLink to="/" isActive={pathname === '/'}>
        {t('home_view_label')}
      </NavbarLink>

      <NavbarLink to="/catalog" isActive={pathname === '/catalog'}>
        {t('catalog_view_label')}
      </NavbarLink>

      <NavbarLink to="/bookmarks" isActive={pathname === '/bookmarks'}>
        {t('bookmarks_view_label')}
      </NavbarLink>

      <NavbarLink to="/settings" isActive={pathname === '/settings'}>
        {t('settings_view_label')}
      </NavbarLink>
    </Navbar>
  );
};

export default NavigationLayout;
