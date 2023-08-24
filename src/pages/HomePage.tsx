import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/* Components */
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { RecentUpdatesCarousel } from '@/containers/RecentUpdatesCarousel';
import { CommonPageLayout } from '@/layout';

/* App modules */
import useBrowserControls from '@/hooks/useBrowserControls';

/* Assets */

const HomePage = () => {
  const { t } = useTranslation('HomeView'); // WARN: This component use useTranslation()
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle(t('view_name'));
  }, [setDocumentTitle, t]);

  return (
    <>
      <CommonPageLayout>
        <Section>
          <Container>
            <Typography variant="h4" align="left">
              {t('recent_updates_heading')}
            </Typography>

            {/* <RecentUpdatesCarousel /> */}
          </Container>
        </Section>

        <Section>
          <Container>
            <Typography variant="h4" align="left">
              {t('youtube_updates_heading')}
            </Typography>
            <Typography>🚧 Under construct</Typography>
          </Container>
        </Section>
      </CommonPageLayout>
    </>
  );
};

export default HomePage;
