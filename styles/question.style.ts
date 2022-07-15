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
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.purple};
  }
  &:first-child {
    margin-bottom: 32px;
  }
`;
