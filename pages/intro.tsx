import * as S from 'styles/intro.style';
import Image from 'next/image';
import Link from 'next/link';
import { getDday } from 'lib/util';
import DemoImage from 'public/asset/demo.png';

function Intro() {
  return (
    <S.Container>
      <S.Feature1>
        <S.TextBox>
          <S.TitleBox>지그재는 입점 파트너와 함께 성장합니다</S.TitleBox>
          <S.DescriptionBox1>
            매월 370만 고객이 이용하는 성공 플랫폼
          </S.DescriptionBox1>
        </S.TextBox>
        <S.ImageBox>
          <Image src={DemoImage} alt="feature1" layout="fill" />
        </S.ImageBox>
      </S.Feature1>
      <S.RegisterBox>
        <S.DdayBox>
          <S.DayText>D-{getDday()}</S.DayText>
          <S.TimeText>18시간 43분 25초</S.TimeText>
        </S.DdayBox>
        <S.RegisterDescriptionBox>
          <S.RegisterDescriptionText>
            사전신청을 해주시면{' '}
          </S.RegisterDescriptionText>
          <S.RegisterDescriptionColorText>
            50퍼센트 할인쿠폰을{' '}
          </S.RegisterDescriptionColorText>
          <S.RegisterDescriptionText>
            런칭 전 사전 알림을 통해 보내드립니다
          </S.RegisterDescriptionText>
        </S.RegisterDescriptionBox>
      </S.RegisterBox>
      <S.RegisterButtonBox>사전 신청하기</S.RegisterButtonBox>
    </S.Container>
  );
}

export default Intro;
