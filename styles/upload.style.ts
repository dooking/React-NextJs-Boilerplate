import styled from 'styled-components';
import { theme, fonts } from 'styles/theme';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

export const UploadItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadBox = styled.section`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-evenly;
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
    width: 150px;
    height: 150px;
    border: 3px dotted #808080;
    background: #e2e2e2;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    border: none;
  }
`;

export const UploadBoxText = styled.div``;

export const ButtonBox = styled.div`
  margin: 0 auto;
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
  & > label {
    margin-bottom: 16px;
  }
`;

export const WarningBox = styled.div`
  text-align: center;
  border: 1px solid black;
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
