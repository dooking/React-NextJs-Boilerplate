import styled from 'styled-components';
import { theme, fonts } from 'styles/theme';

export const Container = styled.div`
  height: 100%;
`;

export const ContentTitle = styled.h2`
  font-size: ${fonts.size.title};
  font-weight: ${fonts.weight.bold};
  color: ${theme.color.black};
  margin-bottom: 16px;
  text-align: center;
`;
export const ContentDescription = styled.h3`
  font-size: 1.1rem;
  color: #a3a3a3;
  word-break: keep-all;
  line-height: 24px;
  text-align: center;
`;

export const ContentBox = styled.section`
  z-index: 100;
  width: 100%;
  margin-bottom: 32px;
`;

export const UploadResultBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 48px;
`;

export const UploadBox = styled.section`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .ant-upload-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  .ant-upload-picture-card-wrapper {
    width: auto;
  }
  .ant-upload.ant-upload-select-picture-card,
  .ant-upload-list-picture-card-container {
    width: 200px;
    height: 200px;
    border: 3px dotted #808080;
    background: black;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    border: none;
  }
`;
export const HowToUploadImage = styled.div`
  color: ${theme.color.purple};
  font-size: 1.3rem;
  cursor: pointer;
`;

export const UploadExampleBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
export const UploadExample = styled.div`
  display: flex;
  align-items: center;
`;

export const GoodExampleImageBox = styled.div`
  width: 200px;
  height: 200px;
  border: 4px solid ${theme.color.green};
  background-color: ${theme.color.green};
  border-radius: 24px;
  & > span {
    border-radius: 24px;
    border: 3px solid red;
  }
  img {
    object-fit: cover;
  }
`;

export const GoodExampleDescriptionBox = styled.div`
  margin-left: 16px;
  color: ${theme.color.green};
  font-size: 1.3rem;
  word-break: keep-all;
`;

export const BorderLine = styled.div`
  border: 1px solid ${theme.color.green};
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const BorderRedLine = styled.div`
  border: 1px solid ${theme.color.purple};
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const GoodExampleDescriptionBoldText = styled.div`
  font-weight: bold;
  font-family: ${fonts.family.GmarketSansBold};
`;
export const GoodExampleDescriptionText = styled.div``;

export const GoodExampleDescriptionRow = styled.div`
  display: flex;
  &:nth-child(1) {
    margin-bottom: 16px;
  }
`;
export const BadExampleImageBox = styled.div`
  width: 200px;
  height: 200px;
  border: 4px solid ${theme.color.purple};
  background: ${theme.color.purple};
  border-radius: 24px;
  & > span {
    border-radius: 24px;
  }
  img {
    object-fit: cover;
  }
`;

export const BadExampleDescriptionBox = styled.div`
  margin-left: 16px;
  color: ${theme.color.purple};
  font-size: 1.3rem;
  word-break: keep-all;
`;

export const BadExampleDescriptionBoldText = styled.div`
  font-weight: bold;
  font-family: ${fonts.family.GmarketSansBold};
`;
export const BadExampleDescriptionText = styled.div``;

export const BadExampleDescriptionRow = styled.div`
  display: flex;
  &:nth-child(1) {
    margin-bottom: 16px;
  }
`;

export const HowToPlayBox = styled.div`
  color: ${theme.color.white};
  width: 70%;
  line-height: 16px;
`;

export const HowToPlayTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 32px;
`;
export const HowToPlayDescription = styled.div`
  color: #808080;
  font-size: 1.3rem;
  margin-bottom: 24px;
  &:nth-child(5) {
    margin-bottom: 0px;
  }
`;
export const ButtonBox = styled.div`
  margin-top: 32px;
  & > div {
    margin: 0 auto;
  }
`;

export const AlignButton = styled.div`
  width: 250px;
  height: 50px;
  color: ${theme.color.white};
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

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  color: #808080;

  & > span > svg {
    font-size: 70px;
    margin-bottom: 24px;
    color: #808080;
  }
`;

export const AgreeBox = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 16px;
  & > label > span {
    color: white;
  }
`;

export const WarningBox = styled.div`
  text-align: center;
  border: 1px solid white;
  padding: 16px;
`;

export const WarningMessage = styled.div`
  margin-top: 10px;
  color: #a3a3a3;
  word-break: keep-all;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

export const AgreeMessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AgreeMessage = styled.div``;

export const genderButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const genderButton = styled.div`
  width: 150px;
  height: 30px;
  margin-right: 16px;
  color: ${theme.color.white};
  background-color: ${theme.color.gray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 32px;
  font-size: 1.5rem;
  padding: 20px 24px;
  justify-content: center;
  cursor: pointer;
`;
