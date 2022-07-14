import React, { useEffect, useState } from 'react';

import * as S from './style';
import Header from 'components/Common/header';
// import Footer from 'components/Common/footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: AppLayoutProps) {
  return (
    <S.Container>
      <Header />
      <S.MainContainer>{children}</S.MainContainer>
      {/* <Footer /> */}
    </S.Container>
  );
}

export default Layout;
