import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { CommonPageLayout } from '@/layout';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('query'));

  return (
    <>
      <CommonPageLayout>
        <Section>
          <Container>
            <Typography>🚧 Under construct</Typography>
          </Container>
        </Section>
      </CommonPageLayout>
    </>
  );
};

export default SearchPage;
