import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { CatalogViewer } from '@/containers/CatalogViewer';
import { CommonPageLayout } from '@/layout';

import { useSearchParams } from 'react-router-dom';

const CatalogView = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  return (
    <CommonPageLayout>
      <Section>
        <Container>
          <Typography>🚧 Under construct / page {currentPage}</Typography>
          <CatalogViewer currentPage={currentPage} itemsPerPage={9} />
        </Container>
      </Section>
    </CommonPageLayout>
  );
};

export default CatalogView;
