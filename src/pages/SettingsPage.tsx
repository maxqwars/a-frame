import { useEffect } from 'react';

import useBrowserControls from '@/hooks/useBrowserControls';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { CommonPageLayout } from '@/layout';
import { CommonAppSettings } from '@/containers/CommonAppSettings';

const SettingsPage = () => {
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle('Mizuhiki | Settings');
  }, [setDocumentTitle]);

  return (
    <CommonPageLayout>
      <Section>
        <Container>
          <CommonAppSettings></CommonAppSettings>
        </Container>
      </Section>
    </CommonPageLayout>
  );
};

export default SettingsPage;
