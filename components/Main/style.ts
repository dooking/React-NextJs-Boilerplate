import styled from 'styled-components';
import { theme, fonts } from 'styles/theme';

export const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
`;

export const TitleBox = styled.div``;

export const MainTitleText = styled.div`
  text-align: center;
  font-size: 3rem;
  font-family: ${fonts.family.GmarketSansBold};
  font-weight: bold;
`;

export const SubTitleText = styled.div``;

export const ImageBox = styled.div`
  cursor: pointer;
  margin-top: 32px;
  margin-bottom: 32px;
  & > span {
    width: 300px !important;
    height: 300px !important;
    border-radius: 16px;
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
  margin-top: 16px;
  font-size: 1.4rem;
`;

export const PlayBoldText = styled.div`
  color: ${theme.color.purpleBold};
  margin-left: 4px;
  font-family: ${fonts.family.GmarketSansBold};
  font-weight: bold;
`;

export const PlayText = styled.div``;

export const PlayBtnBox = styled.div`
  width: 300px;
  height: 50px;
  color: ${theme.color.black};
  background-color: ${theme.color.purple};
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
