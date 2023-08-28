import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { CommonPageLayout } from '@/layout';
import { useSearchParams } from 'react-router-dom';
import { SearchViewer } from '@/containers/SearchViewer';
import { Typography } from '@/components/Typography';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <>
      <CommonPageLayout>
        <Section>
          <Container>
            <Typography>Results for: </Typography>
            <SearchViewer query={query} />
          </Container>
        </Section>
      </CommonPageLayout>
    </>
  );
};

export default SearchPage;
