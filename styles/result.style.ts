import styled from 'styled-components';
import { theme, fonts } from 'styles/theme';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ContentTitle = styled.h2`
  font-size: ${fonts.size.title};
  font-weight: ${fonts.weight.bold};
  color: ${theme.color.black};
  margin-bottom: 16px;
  text-align: center;
`;

export const ContentBox = styled.section`
  z-index: 100;
  width: 100%;
  margin-bottom: 32px;
`;

export const SummaryText = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;
export const SummaryTitleText = styled.div``;
export const SummaryPurpleText = styled.div`
  color: ${theme.color.purple};
  margin-left: 8px;
  font-weight: bold;
`;
export const SummaryImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const SummaryBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
export const UserImageBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  & > span {
    width: 200px !important;
    height: 200px !important;
    border-radius: 8px;
    position: relative !important;
  }
  img {
    object-fit: contain;
  }
`;

export const DetailBox = styled.div`
  margin-bottom: 32px;
`;
export const DetailTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const DetailDescriptionItem = styled.div`
  display: flex;
  border: 1px solid #e2e2e2;
  padding: 16px;
  justify-content: space-between;
  border-bottom: none;
`;

export const DetailDescriptionBox = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;
export const DetailDescriptionText = styled.div`
  margin-left: 8px;
`;

export const LeftDescription = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  font-weight: bold;
  & > span {
    margin-bottom: 2px;
    font-size: 2rem;
  }
`;
export const RightDescription = styled.div`
  width: 70%;
`;

export const RecommendBox = styled.div``;
export const RecommendTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const RecommendImageListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const RecommendImageBox = styled.div``;
export const RecommendDescription = styled.div`
  margin-top: 8px;
  font-weight: bold;
`;
export const RecommendImageItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  flex-direction: column;
  align-items: center;
  & > span {
    width: 100px !important;
    height: 100px !important;
    border-radius: 8px;
    position: relative !important;
  }
  img {
    object-fit: contain;
  }
`;

export const ReviewBox = styled.div`
  margin-bottom: 32px;
  & > ul {
    display: flex;
    justify-content: center;
  }
  & > ul > li > div {
    font-size: 4rem;
    margin-right: 8px;
  }
`;
export const ReviewTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ShareBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
export const BorderLine = styled.div`
  border: 1px solid #e2e2e2;
  width: 5rem;
`;
export const ShareTitle = styled.div`
  color: ${theme.color.black};
  font-size: 1.3rem;
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: bold;
`;
export const ShareList = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
`;
export const ShareImageBox = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  & > span {
    width: 50px !important;
    height: 50px !important;
    border-radius: 8px;
  }
  img {
    object-fit: cover;
  }
`;

export const KakaoShareBox = styled.div`
  width: 500px;
  background-color: #e2e2e2;
  padding: 16px;
  height: 60px;
  position: fixed;
  bottom: 0;
  margin-left: -16px;
  cursor: pointer;
`;
export const KakaoShareTitle = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
