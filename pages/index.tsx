import styled from 'styled-components';
import Link from 'next/Link';
import * as S from 'styles/index.style';
const Index = () => {
  return (
    <S.HeaderContainer>
      <div>
        <h2>Link to 'tomato' Page</h2>
        <Link href="/about-us">
          <a>move to about</a>
        </Link>
        <Link href="/playground">
          <a>move to playground</a>
        </Link>
        <Link href="/contact">
          <a>move to contact</a>
        </Link>
      </div>
    </S.HeaderContainer>
  );
};

export default Index;
