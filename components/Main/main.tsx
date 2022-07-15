import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';
import { CaretRightOutlined } from '@ant-design/icons';

import MainAssetImage from 'public/asset/main_asset.jpg';
import { SERVICE_TITLE } from 'lib/constant';

function Main() {
  const count = 1167;
  return (
    <S.MainContainer>
      <S.TitleBox>
        <S.MainTitleText>{SERVICE_TITLE}</S.MainTitleText>
        <S.SubTitleText>이 헤어스타일은 나한테 어울릴까?</S.SubTitleText>
      </S.TitleBox>
      <S.ImageBox>
        <Image src={MainAssetImage} alt="main-asset" layout="fill" />
      </S.ImageBox>
      <S.PlayBox>
        <Link href="/upload">
          <S.PlayBtnBox>
            Play
            <CaretRightOutlined />
          </S.PlayBtnBox>
        </Link>
        <S.PlayTextBox>
          <S.PlayText>현재까지</S.PlayText>
          <S.PlayBoldText>{count}</S.PlayBoldText>
          <S.PlayText>명이 참여하였습니다</S.PlayText>
        </S.PlayTextBox>
      </S.PlayBox>
    </S.MainContainer>
  );
}

export default Main;
