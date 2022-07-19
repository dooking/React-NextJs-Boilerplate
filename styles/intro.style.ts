import styled from 'styled-components';
import { fonts, theme, media } from 'styles/theme';

export const Container = styled.main`
  height: 100%;
  position: relative;
  max-width: 500px;
`;

export const Feature1 = styled.section`
  display: flex;
  flex-direction: column;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleBox = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 1.19;
  letter-spacing: -1px;
  color: rgb(39, 39, 39);
  text-align: center;

  animation: 0.75s ease-out 0s 1 normal both running fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
export const DescriptionBox1 = styled.p`
  margin: 0px;
  padding: 10px 0px 0px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: rgb(170, 170, 170);

  animation: 0.75s ease-out 0.4s 1 normal both running fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
export const ImageBox = styled.figure`
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
  animation: 1s ease-out 0.75s 1 normal both running ImageFadeIn;
  @keyframes ImageFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const RegisterBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;
export const DdayBox = styled.div``;
export const DayText = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
`;
export const TimeText = styled.div`
  font-weight: bold;
  text-align: center;
`;
export const RegisterDescriptionBox = styled.div`
  text-align: center;
`;
export const RegisterDescriptionText = styled.span``;
export const RegisterDescriptionColorText = styled.span`
  font-weight: bold;
  color: blue;
`;
export const RegisterButtonBox = styled.section`
  z-index: 100;
  transition: all 0.5s;
  position: fixed;
  bottom: 32px;
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
`;

export const InputBox = styled.div`
  margin-bottom: 8px;
  &:nth-child(3) {
    margin-bottom: 16px;
  }
`;
export const InputTitle = styled.div`
  font-weight: bold;
`;
export const PhoneInput = styled.input`
  color: #000;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  height: 40px;
  background: none;
  padding-left: 16px;
  border-radius: 16px;
  &:focus {
    border: 2px solid #ff2731;
  }
`;
export const ButtonBox = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 12px;
  width: 100%;
  height: 50px;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
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
