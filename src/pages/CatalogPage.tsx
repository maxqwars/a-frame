import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { CatalogViewer } from '@/containers/CatalogViewer';
import { CommonPageLayout } from '@/layout';

import { useSearchParams } from 'react-router-dom';

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  return (
    <CommonPageLayout>
      <Section>
        <Container>
          {document.body.clientWidth}
          <CatalogViewer currentPage={currentPage} itemsPerPage={18} />
        </Container>
      </Section>
    </CommonPageLayout>
  );
};

export default CatalogPage;
