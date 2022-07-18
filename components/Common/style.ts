import styled from 'styled-components';
import { fonts, theme, media } from 'styles/theme';

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  background-color: white;
  font-family: ${fonts.family.GmarketSansMedium};
  height: 100vh;
  position: relative;
  ${media.custom(1024)} {
    width: auto;
    bottom: 0;
    margin: 0 0 0 0;
    border-radius: 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.gray};
  padding: 10px 12px;
  width: 100%;
  height: 44px;
  z-index: 100;
`;

export const MainContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
  padding: 16px;
`;

export const ImageBox = styled.div`
  cursor: pointer;
  & > span {
    width: 100px !important;
    height: 20px !important;
    position: relative !important;
  }

  img {
    object-fit: contain;
  }
`;

export const LinkBox = styled.div`
  & > span {
    font-size: 2rem;
    cursor: pointer;
  }
`;
