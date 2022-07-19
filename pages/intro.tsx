import React, { useState } from 'react';
import * as S from 'styles/intro.style';
import { Button, Modal, Checkbox, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { getDday } from 'lib/util';
import DemoImage from 'public/asset/demo.png';

interface UserResultProps {
  result: string;
  gender: string;
  phoneNumber: string;
}
function Intro() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userResult, setUserResult] = useState<UserResultProps>({
    result: '',
    gender: '',
    phoneNumber: '',
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const checkHandler = (result: string) => {
    setUserResult({ ...userResult, result });
  };
  const genderHandler = (gender: string) => {
    setUserResult({
      ...userResult,
      gender,
    });
  };
  const phoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResult({ ...userResult, phoneNumber: e.target.value });
  };
  const submitHandler = () => {
    console.log(userResult);
    if (userResult.result === '') {
      console.log('1');
      message.error('상품을 선택해주세요.');
      return;
    }
    if (userResult.gender === '') {
      console.log('2');
      message.error('성별을 선택해주세요.');
      return;
    }
    if (userResult.phoneNumber === '') {
      console.log('3');
      message.error('전화번호를 입력해주세요.');
      return;
    }

    if (
      !userResult.phoneNumber.match(
        /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
      )
    ) {
      message.error('전화번호를 형식이 일치하지 않습니다.');
      return;
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      <S.RegisterButtonBox onClick={showModal}>
        사전 신청하기
      </S.RegisterButtonBox>
      <Modal
        title="BiDi 사전 신청"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <S.InputBox>
          <S.InputTitle>신청할 상품 선택</S.InputTitle>
          <Checkbox onChange={() => checkHandler('A')}>A 아이템</Checkbox>
          <Checkbox onChange={() => checkHandler('B')}>B 아이템</Checkbox>
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>성별 선택</S.InputTitle>
          <Checkbox onChange={() => genderHandler('male')}>남자</Checkbox>
          <Checkbox onChange={() => genderHandler('female')}>여자</Checkbox>
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>휴대폰 번호</S.InputTitle>
          <S.PhoneInput
            onChange={phoneNumberHandler}
            placeholder="휴대폰 번호"
          />
        </S.InputBox>
        <S.ButtonBox onClick={submitHandler}>응모하기</S.ButtonBox>
      </Modal>
    </S.Container>
  );
}

export default Intro;
