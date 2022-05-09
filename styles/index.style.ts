import styled from 'styled-components';
import { theme, media } from './theme';

export const HeaderContainer = styled.div`
  background-color: ${theme.color.purple};

  ${media.tablet} {
    background-color: pink;
  }
`;
