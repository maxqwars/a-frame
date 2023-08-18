import { useEffect } from 'react';

import useBrowserControls from '@/hooks/useBrowserControls';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { CommonPageLayout } from '@/layout';

const SettingsView = () => {
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle('Mizuhiki | Settings');
  }, [setDocumentTitle]);

  return (
    <CommonPageLayout>
      <Section>
        <Container>
          <Typography>🚧 Under construct</Typography>
        </Container>
      </Section>
    </CommonPageLayout>
  );
};

export default SettingsView;
