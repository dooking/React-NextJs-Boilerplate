import styled from 'styled-components';
import Header from 'components/Common/header';
import Link from 'next/Link';

const Index = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

// style
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
`;

export default Index;
