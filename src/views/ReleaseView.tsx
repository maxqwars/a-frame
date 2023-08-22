import { useLocation } from 'react-router-dom';

import CommonPageLayout from '@/layout/CommonPageLayout';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { DisplayRelease } from '@/components/DisplayRelease';

const ReleaseView = () => {
  const { pathname } = useLocation();
  const releaseCode = pathname.split('/')[2];

  return (
    <CommonPageLayout>
      <Section>
        <Container>
          <DisplayRelease code={releaseCode} />
        </Container>
      </Section>
    </CommonPageLayout>
  );
};

export default ReleaseView;
