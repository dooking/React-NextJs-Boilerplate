import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';
import { message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import TypoLogoImage from 'public/asset/logo.png';
import { CLIENT_URL } from 'lib/constant';

function Header() {
  const url = CLIENT_URL;

  const copyToUrl = async () => {
    message.success('링크가 복사되었습니다!');
  };

  return (
    <S.HeaderContainer>
      <Link href="/">
        <S.ImageBox>
          <Image src={TypoLogoImage} alt="logo" layout="fill" />
        </S.ImageBox>
      </Link>
      <CopyToClipboard text={url}>
        <S.LinkBox onClick={copyToUrl}>
          <LinkOutlined />
        </S.LinkBox>
      </CopyToClipboard>
    </S.HeaderContainer>
  );
}

export default Header;
