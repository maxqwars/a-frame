import { useLocation } from 'react-router-dom';

import CommonPageLayout from '@/layout/CommonPageLayout';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Typography } from '@/components/Typography';
import { DisplayRelease } from '@/components/DisplayRelease';

const ReleaseView = () => {
  const { pathname } = useLocation();
  const releaseCode = pathname.split('/')[2];

  return (
    <CommonPageLayout>
      <Section>
        <Container>
          <Typography variant="h4">{releaseCode}</Typography>
          <DisplayRelease code={releaseCode} />
        </Container>
      </Section>
    </CommonPageLayout>
  );
};

export default ReleaseView;
