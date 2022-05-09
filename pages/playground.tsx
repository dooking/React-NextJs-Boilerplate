import styled from 'styled-components';
import Link from 'next/Link';
const Playground = () => {
  return (
    <Wrapper>
      <div>Playground</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .title {
    font-weight: 800;
  }
`;

export default Playground;
