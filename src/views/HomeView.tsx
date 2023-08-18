import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/* Components */
import { Navbar, NavbarLink } from '@/components/Navbar';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { ReleasesCarousel, ReleasesCarouselItemType } from '@/components/ReleasesCarousel';

/* App modules */
import useBrowserControls from '@/hooks/useBrowserControls';
import APIModel, { UpdatedReleasesType } from '@/models/APIModel';

/* Assets */
import appLogo from '@/assets/mizuhiki-logo.svg';

const HomeView = () => {
  const { t } = useTranslation();
  const { setDocumentTitle } = useBrowserControls();
  const [updates, setUpdates] = useState<UpdatedReleasesType[]>([]);

  useEffect(() => {
    setDocumentTitle(`${t('app-name')} | ${t('nav-home-label')}`);

    if (updates.length === 0) {
      APIModel.getUpdatedReleases().then((data) => {
        setUpdates(data);
      });
    }
  }, [setDocumentTitle, t]);

  return (
    <>
      <Navbar image={appLogo}>
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

          <ReleasesCarousel items={updates as ReleasesCarouselItemType[]} />
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
