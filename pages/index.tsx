import * as S from 'styles/index.style';
import Image from 'next/image';

import MainImage from 'public/asset/boy.png';

function Index() {
  return (
    <S.Container>
      <S.TitleBox>
        <S.TitleText1>안녕하세요!</S.TitleText1>
        <S.TitleText2>일정관리</S.TitleText2>
        <S.TitleText3>어떻게 하세요?</S.TitleText3>
      </S.TitleBox>
      <S.DescriptionBox>
        <S.DescriptionText1>
          현대인으로 사는건 여간 쉬운 일이 아니죠.
        </S.DescriptionText1>
        <S.DescriptionText2>
          신경 써야 할 일정들이 너무나 많잖아요.
        </S.DescriptionText2>
        <S.DescriptionText3>
          다들 한번쯤 중요한 일정 놓쳐본 경험있지 않나요?
        </S.DescriptionText3>
        <S.DescriptionText4>
          게더링과 함께 ‘쉽고, 재미있게’ 일정 관리 해보세요!
        </S.DescriptionText4>
      </S.DescriptionBox>
      <S.ImageBox>
        <Image src={MainImage} alt="main" layout="fill" />
      </S.ImageBox>
      <S.PlayBox>구경하러 가기</S.PlayBox>
    </S.Container>
  );
}

export default Index;
