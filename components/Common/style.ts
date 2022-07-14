import styled from 'styled-components';
import { fonts, theme } from 'styles/theme';

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  font-family: ${fonts.family.GmarketSansMedium};
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${theme.color.white};
  height: 60px;
  padding: 10px 8px;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
  height: calc(100% - 60px);
  padding: 16px;
`;

export const ImageBox = styled.div`
  margin: 0 auto;
  cursor: pointer;
  & > span {
    width: 200px !important;
    height: 40px !important;
    position: relative !important;
  }

  img {
    object-fit: contain;
  }
`;
