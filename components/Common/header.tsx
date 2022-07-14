import * as S from './style';
import Image from 'next/image';

import TypoLogoImage from 'public/asset/logo.png';

function Header() {
  return (
    <S.HeaderContainer>
      <S.ImageBox>
        <Image src={TypoLogoImage} alt="logo" layout="fill" />
      </S.ImageBox>
    </S.HeaderContainer>
  );
}

export default Header;
