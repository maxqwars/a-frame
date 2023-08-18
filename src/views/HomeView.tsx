import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/* Components */
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { RecentUpdatesCarousel } from '@/components/RecentUpdatesCarousel';

import NavigationLayout from '@/layout/NavigationLayout';

/* App modules */
import useBrowserControls from '@/hooks/useBrowserControls';

/* Assets */

const HomeView = () => {
  const { t } = useTranslation('HomeView'); // WARN: This component use useTranslation()
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle(t('view_name'));
  }, [setDocumentTitle, t]);

  return (
    <>
      <NavigationLayout />

      <Section>
        <Container>
          <Typography variant="h4" align="left">
            {t('recent_updates_heading')}
          </Typography>

          <RecentUpdatesCarousel />
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography variant="h4" align="left">
            {t('youtube_updates_heading')}
          </Typography>
        </Container>
      </Section>
    </>
  );
};

export default HomeView;
