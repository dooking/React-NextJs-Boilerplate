import * as S from 'styles/result.style';
import React, { useEffect, useState } from 'react';
import { SERVER_URL, SERVICE_TITLE } from 'lib/constant';
import Image from 'next/image';
import { Rate, message } from 'antd';
import {
  CheckCircleTwoTone,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CLIENT_URL } from 'lib/constant';
import InstaImage from 'public/asset/instagramLogo.png';
import KakaoImage from 'public/asset/kakao.jpg';
import UrlImage from 'public/asset/url.png';

const comment_list = [
  {
    status: true,
    title: '두상',
    description: '전체적으로 두상이 잘 어울리는 편입니다.',
  },
  {
    status: false,
    title: '모질',
    description: ' 모질이 달라 자연스러운 연출이 불가능합니다.',
  },
  {
    status: true,
    title: '얼굴 톤',
    description: ' 해당 스타일에 해당되는 피부톤에 적합합니다.',
  },
];

const recommnet_list = [
  {
    title: '청순한 C컬펌',
    img_src:
      'https://bidi-ai.s3.ap-northeast-2.amazonaws.com/asset/%EC%A0%9C%EC%8B%9C_long_hair.jpg',
  },
  {
    title: '청순한 C컬펌',
    img_src:
      'https://bidi-ai.s3.ap-northeast-2.amazonaws.com/asset/%EC%A0%9C%EC%8B%9C_long_hair.jpg',
  },
  {
    title: '다정한 S컬펌',
    img_src:
      'https://bidi-ai.s3.ap-northeast-2.amazonaws.com/asset/%EC%A0%9C%EC%8B%9C_long_hair.jpg',
  },
];

function Result() {
  const [reviewStar, setReviewStar] = useState(0);
  const [isStarDisable, setIsStarDisable] = useState(false);

  const url = CLIENT_URL + `/playground/world-cup/}`;

  const percent = 80;
  const customIcons: Record<any, React.ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  const reviewStarHandler = (star: number) => {
    setReviewStar(star);
    setIsStarDisable(true);
    message.success('응답해주셔서 감사합니다 :)');
  };
  const copyToUrl = async () => {
    message.success('링크가 복사되었습니다!');
  };
  const kakaoHandler = async () => {};
  const instaHandler = async () => {
    window.open('https://www.instagram.com/');
  };
  return (
    <S.Container>
      <S.ContentBox>
        <S.ContentTitle>{SERVICE_TITLE}</S.ContentTitle>
      </S.ContentBox>
      <S.SummaryBox>
        <S.SummaryText>
          <S.SummaryTitleText>두 분의 궁합도는</S.SummaryTitleText>
          <S.SummaryPurpleText> {percent}</S.SummaryPurpleText>
          <S.SummaryTitleText>% 입니다</S.SummaryTitleText>
        </S.SummaryText>
        <S.SummaryImage>
          <S.UserImageBox>
            <Image
              src={
                'https://bidi-ai.s3.ap-northeast-2.amazonaws.com/asset/after.jpeg'
              }
              alt="user-image"
              layout="fill"
            />
          </S.UserImageBox>
          <S.UserImageBox>
            <Image
              src={
                'https://bidi-ai.s3.ap-northeast-2.amazonaws.com/asset/%EC%A0%9C%EC%8B%9C_long_hair.jpg'
              }
              alt="user-image"
              layout="fill"
            />
          </S.UserImageBox>
        </S.SummaryImage>
        {/* <Progress
          type="circle"
          width={150}
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={90}
          format={(percent) => `${percent} / 100`}
        /> */}
      </S.SummaryBox>
      <S.DetailBox>
        <S.DetailTitle>종합 의견</S.DetailTitle>
        <S.DetailDescriptionBox>
          {comment_list.map((comment, index) => {
            return (
              <S.DetailDescriptionItem>
                <S.LeftDescription>
                  <CheckCircleTwoTone
                    twoToneColor={comment.status ? 'green' : 'red'}
                  />
                  <S.DetailDescriptionText>
                    {comment.title}
                  </S.DetailDescriptionText>
                </S.LeftDescription>
                <S.RightDescription>{comment.description}</S.RightDescription>
              </S.DetailDescriptionItem>
            );
          })}
        </S.DetailDescriptionBox>
      </S.DetailBox>
      <S.RecommendBox>
        <S.RecommendTitle>비슷한 스타일</S.RecommendTitle>
        <S.RecommendImageListBox>
          {recommnet_list.map((recommend, index) => {
            return (
              <S.RecommendImageItem>
                <Image src={recommend.img_src} alt="user-image" layout="fill" />
                <S.RecommendDescription>
                  {recommend.title}
                </S.RecommendDescription>
              </S.RecommendImageItem>
            );
          })}
        </S.RecommendImageListBox>
      </S.RecommendBox>
      <S.ReviewBox>
        <S.ReviewTitle>추천 만족하셨나요?</S.ReviewTitle>
        <Rate
          defaultValue={1}
          value={reviewStar}
          disabled={isStarDisable}
          onChange={(star: number) => reviewStarHandler(star)}
          character={({ index }) => customIcons[Number(index) + 1]}
        />
      </S.ReviewBox>
      <S.ShareBox>
        <S.BorderLine />
        <S.ShareTitle>공유하기</S.ShareTitle>
        <S.ShareList>
          <S.ShareImageBox onClick={kakaoHandler}>
            <Image src={KakaoImage} alt="kakao" width="50px" height="50px" />
          </S.ShareImageBox>
          <S.ShareImageBox onClick={instaHandler}>
            <Image src={InstaImage} alt="insta" width="50px" height="50px" />
          </S.ShareImageBox>
          <CopyToClipboard text={url}>
            <S.ShareImageBox onClick={copyToUrl}>
              <Image src={UrlImage} alt="url" width="50px" height="50px" />
            </S.ShareImageBox>
          </CopyToClipboard>
        </S.ShareList>
      </S.ShareBox>
      <S.KakaoShareBox>
        <S.KakaoShareTitle>공유하기</S.KakaoShareTitle>
      </S.KakaoShareBox>
    </S.Container>
  );
}

export default Result;
