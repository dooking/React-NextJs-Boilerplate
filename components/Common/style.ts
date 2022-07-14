import styled from 'styled-components';
import { theme } from 'styles/theme';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${theme.color.white};
  height: 50px;
  padding: 5px 8px;
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
