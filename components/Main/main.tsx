import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';
import { CaretRightOutlined } from '@ant-design/icons';

import MainAssetImage from 'public/asset/main_asset.jpg';

function Main() {
  const count = 1167;
  return (
    <S.MainContainer>
      <S.TitleBox>
        <S.MainTitleText>제목제목제목</S.MainTitleText>
        <S.SubTitleText>이 헤어스타일은 나한테 어울릴까?</S.SubTitleText>
      </S.TitleBox>
      <S.ImageBox>
        <Image src={MainAssetImage} alt="main-asset" layout="fill" />
      </S.ImageBox>
      <S.PlayBox>
        <S.PlayBtnBox>
          Play
          <CaretRightOutlined />
        </S.PlayBtnBox>
        <S.PlayTextBox>
          <S.PlayText>현재까지</S.PlayText>
          <S.PlayBlueText>{count}</S.PlayBlueText>
          <S.PlayText>명이 참여하였습니다</S.PlayText>
        </S.PlayTextBox>
      </S.PlayBox>
    </S.MainContainer>
  );
}

export default Main;
