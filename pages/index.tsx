import styled from 'styled-components';

const Index = () => {
  return (
    <Wrapper>
      <div className="title">title</div>
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

export default Index;
