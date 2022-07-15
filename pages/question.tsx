import * as S from 'styles/question.style';
import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { useRouter } from 'next/router';

const question_list = [
  {
    question: '귀하의 모발은 어떻게 보입니까?',
    answer1: '적색',
    answer2: '밝은색',
  },
  {
    question: '두상을 알아요?',
    answer1: '알아요',
    answer2: '몰라요',
  },
  {
    question: '좋아하는 스타일은?',
    answer1: '박보영',
    answer2: '수지',
  },
  {
    question: '얼굴형은?',
    answer1: '둥근형',
    answer2: '긴형',
  },
];
function Question() {
  const router = useRouter();
  const [isProfile, setIsProfile] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerList, setAnswerList] = useState<string[]>([]);

  const selectHandler = (answerText: string) => {
    setAnswerList([...answerList, answerText]);
    setQuestionIndex((prev) => prev + 1);
    if (questionIndex + 1 === question_list.length) {
      setIsProfile(true);
    }
  };

  return (
    <S.Container>
      <S.ProgressBox>
        <S.ProgressText>
          {questionIndex + 1}/{question_list.length + 1}
        </S.ProgressText>
        <Progress
          percent={((questionIndex + 1) / (question_list.length + 1)) * 100}
          showInfo={false}
        />
      </S.ProgressBox>
      {isProfile ? (
        <>hi</>
      ) : (
        <S.QuestionBox>
          <S.QuestionText>
            Q. {question_list[questionIndex].question}
          </S.QuestionText>
          <S.AnswerBox>
            <S.AnswerText
              onClick={() =>
                selectHandler(question_list[questionIndex].answer1)
              }
            >
              {question_list[questionIndex].answer1}
            </S.AnswerText>
            <S.AnswerText
              onClick={() =>
                selectHandler(question_list[questionIndex].answer2)
              }
            >
              {question_list[questionIndex].answer2}
            </S.AnswerText>
          </S.AnswerBox>
        </S.QuestionBox>
      )}
    </S.Container>
  );
}

export default Question;
