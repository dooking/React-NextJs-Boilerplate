import styled from 'styled-components';
import { fonts, theme, media } from 'styles/theme';

export const Container = styled.main`
  height: 100%;
  position: relative;
  max-width: 500px;
`;

export const TitleBox = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 2.25rem;
  line-height: 3rem;
  font-weight: bold;
  letter-spacing: -0.9px;
  --tw-text-opacity: 1;
  color: rgb(236 137 104 / var(--tw-text-opacity));
`;
export const TitleText1 = styled.span`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;
export const TitleText2 = styled.span``;
export const TitleText3 = styled.span`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: black;
`;

export const DescriptionBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
export const DescriptionText1 = styled.span``;
export const DescriptionText2 = styled.span`
  margin-bottom: 16px;
`;
export const DescriptionText3 = styled.span``;
export const DescriptionText4 = styled.span``;

export const ImageBox = styled.div`
  cursor: pointer;
  margin-top: 16px;
  overflow: hidden;
  & > span {
    width: 100% !important;
    height: 400px !important;
    position: relative !important;
  }

  img {
    object-fit: contain;
  }
`;

export const PlayBox = styled.section`
  z-index: 100;
  transition: all 0.5s;
  position: fixed;
  bottom: 42px;
  margin: 0 8px;
  width: 452px;
  max-width: 452px;
  height: 58px;
  border-radius: 12px;
  background: linear-gradient(to right, #ff2731, #ff2731, #002251);
  color: #fff;
  line-height: 58px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;

  /* ${media.custom(1024)} {
    width: calc(100% - 48px);
    max-width: initial;
  } */
`;

export const PlayBoxText = styled.span`
  animation: blink-effect 2s linear infinite;
  @keyframes blink-effect {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
`;
