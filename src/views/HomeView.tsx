import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/* Components */
import { Navbar, NavbarLink } from '@/components/Navbar';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { RecentUpdatesCarousel } from '@/components/RecentUpdatesCarousel';

/* App modules */
import useBrowserControls from '@/hooks/useBrowserControls';

/* Assets */
import logo from '@/assets/mizuhiki-logo.svg';

const HomeView = () => {
  const { t } = useTranslation(); // WARN: This component use useTranslation()
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle(`${t('app-name')} | ${t('nav-home-label')}`);
  }, [setDocumentTitle, t]);

  return (
    <>
      <Navbar image={logo}>
        <NavbarLink isActive>{t('nav-home-label')}</NavbarLink>
        <NavbarLink to="/catalog">{t('nav-catalog-label')}</NavbarLink>
        <NavbarLink to="/bookmarks">{t('nav-bookmarks-label')}</NavbarLink>
        <NavbarLink to="/settings">{t('nav-settings-label')}</NavbarLink>
      </Navbar>

      <Section>
        <Container>
          <Typography variant="h4" align="left">
            Recent updates
          </Typography>

          <RecentUpdatesCarousel />
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography variant="h4" align="left">
            YouTube updates
          </Typography>
        </Container>
      </Section>
    </>
  );
};

export default HomeView;
