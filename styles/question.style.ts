import styled from 'styled-components';
import { theme, fonts } from 'styles/theme';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProgressBox = styled.div`
  margin-bottom: 32px;
`;
export const ProgressText = styled.div`
  text-align: end;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const QuestionBox = styled.div``;
export const QuestionText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 64px;
`;

export const AnswerBox = styled.div``;
export const AnswerText = styled.div`
  border: 1px solid black;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.purple};
  }
  &:first-child {
    margin-bottom: 32px;
  }
`;

export const ProfileBox = styled.div`
  margin: 0 auto;
  margin-top: 32px;
`;
export const ProfileImageBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  & > span {
    width: 300px !important;
    height: 300px !important;
    border-radius: 8px;
    position: relative !important;
  }
  img {
    object-fit: contain;
  }
`;

export const PhoneNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PhoneNumberTitleText = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const PhoneNumberDescriptionText = styled.div`
  color: grey;
  margin-bottom: 16px;
`;
export const PhoneNumberInput = styled.input`
  height: 50px;
  width: 300px;
  background-color: #e2e2e2;
  border: none;
  border-radius: 8px;
  padding: 24px;
  color: white;
  font-size: 1.3rem;
  margin-bottom: 32px;
`;

export const SubmitBtnBox = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 50px;
  color: ${theme.color.white};
  background-color: ${theme.color.purple};
  border-radius: 8px;
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
