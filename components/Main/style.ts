import styled from 'styled-components';
import { theme, fonts } from 'styles/theme';

export const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div``;

export const MainTitleText = styled.div``;
export const SubTitleText = styled.div``;

export const ImageBox = styled.div`
  cursor: pointer;

  & > span {
    width: 300px !important;
    height: 300px !important;
    position: relative !important;
  }

  img {
    object-fit: contain;
  }
`;

export const PlayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayTextBox = styled.div`
  display: flex;
`;

export const PlayBlueText = styled.div`
  color: ${theme.color.blue};
  margin-left: 4px;
  font-family: ${fonts.family.GmarketSansBold};
`;

export const PlayText = styled.div``;

export const PlayBtnBox = styled.div`
  width: 150px;
  height: 30px;
  color: ${theme.color.black};
  background-color: ${theme.color.blue};
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 20px 24px;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: white;
  }
  & > span {
    margin-left: 4px;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
