import { CLIENT_URL, S3_URL } from 'lib/constant';

declare global {
  interface window {
    Kakao?: any;
  }
}

export const KakaoShare = () => {
  const { Kakao, location } = window as any;
  const url = CLIENT_URL + `/playground/world-cup/`;
  if (Kakao) {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'BiDi - 나만의 AI 얼굴 월드컵',
        description:
          '나만의 AI 얼굴 월드컵을 만들어본 후, 친구들에게 공유해보세요!',
        imageUrl: `${S3_URL}/asset/real_intro.png`,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }
};
