import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';

import TypoLogoImage from 'public/asset/logo.png';

function Header() {
  return (
    <S.HeaderContainer>
      <Link href="/">
        <S.ImageBox>
          <Image src={TypoLogoImage} alt="logo" layout="fill" />
        </S.ImageBox>
      </Link>
    </S.HeaderContainer>
  );
}

export default Header;
