import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, NavbarLink } from '@/components/Navbar';

/* App modules */
import useBrowserControls from '@/hooks/useBrowserControls';

/* Assets */
import appLogo from '@/assets/mizuhiki-logo.svg';

const HomeView = () => {
  const { t } = useTranslation();
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle(`${t('app-name')} | ${t('nav-home-label')}`);
  }, [setDocumentTitle, t]);

  return (
    <>
      <Navbar image={appLogo}>
        <NavbarLink isActive>{t('nav-home-label')}</NavbarLink>
        <NavbarLink to="/catalog">{t('nav-catalog-label')}</NavbarLink>
        <NavbarLink to="/bookmarks">{t('nav-bookmarks-label')}</NavbarLink>
        <NavbarLink to="/settings">{t('nav-settings-label')}</NavbarLink>
      </Navbar>
    </>
  );
};

export default HomeView;
