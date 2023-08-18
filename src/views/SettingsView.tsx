import { useEffect } from 'react';

import useBrowserControls from '@/hooks/useBrowserControls';

import NavigationLayout from '@/layout/NavigationLayout';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { SelectControl } from '@/components/SelectControl';

const themeOptions = [
  { label: 'auto', value: 'system' },
  { label: 'dark', value: 'dark' },
  { label: 'light', value: 'light' },
];

const SettingsView = () => {
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle('Mizuhiki | Settings');
  }, [setDocumentTitle]);

  return (
    <>
      <NavigationLayout />

      <Section>
        <Container>
          <Typography variant="h4" align="left">
            Settings
          </Typography>

          <SelectControl label={'Theme'} options={themeOptions} />
        </Container>
      </Section>
    </>
  );
};

export default SettingsView;
