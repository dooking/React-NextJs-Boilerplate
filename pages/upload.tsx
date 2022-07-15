import 'antd/dist/antd.css';
import React, { useState } from 'react';
import * as S from 'styles/upload.style';
import axios from 'axios';
import ImgCrop from 'antd-img-crop';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Upload as AntdUpload, Checkbox, message } from 'antd';
import { FileImageOutlined, CaretRightOutlined } from '@ant-design/icons';
import { SERVER_URL } from 'lib/constant';

function Upload() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAlignment, setIsAlignment] = useState(false);
  const [profileId, setProfileId] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [userImagefileList, setUserImagefileList] = useState([]);
  const [userImageFile, setUserImageFile] = useState('');
  const [referenceImagefileList, setReferenceImagefileList] = useState([]);
  const [referenceImageFile, setReferenceImageFile] = useState('');

  const userImageUploadHandler = ({ fileList: newFileList }: any) => {
    setUserImagefileList(newFileList);
    if (newFileList.length) {
      setUserImageFile(newFileList[0].originFileObj);
    } else {
      setUserImageFile('');
    }
  };
  const referenceImageUploadHandler = ({ fileList: newFileList }: any) => {
    setReferenceImagefileList(newFileList);
    if (newFileList.length) {
      setUserImageFile(newFileList[0].originFileObj);
    } else {
      setUserImageFile('');
    }
  };

  const checkHandler = (e: CheckboxChangeEvent) => {
    setIsChecked(!isChecked);
  };
  const alignHandler = async () => {
    if (!userImageFile) {
      alert('사진을 업로드해주세요!');
      return;
    }
    // gtag.event({
    //   action: 'world-cup',
    //   category: 'upload',
    //   label: 'upload-profile',
    // });
    const formData = new FormData();
    formData.append('profile_image', userImageFile);
    formData.append('background_remove', 'true');
    setLoading(true);
    const { data } = await axios({
      method: 'post',
      url: `${SERVER_URL}/web/alignment`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    setLoading(false);
    if (data.data.type == 2) {
      message.error('사진이 너무 가깝습니다');
      message.warning('다른 사진을 다시 등록해주세요!');
      return;
    }
    if (data.data.type == 3) {
      message.error('2명 이상의 사람이 감지되었습니다');
      message.warning('다른 사진을 다시 등록해주세요!');
      return;
    }
    if (data.data.type == 4) {
      message.error('사람을 감지하지 못했습니다');
      message.warning('다른 사진을 다시 등록해주세요!');
      return;
    }
    setIsAlignment(true);
    setProfileId(data.data.profile_id);
  };

  return (
    <S.Container>
      <S.ContentBox>
        <S.ContentTitle>제목제목제목</S.ContentTitle>
        <S.ContentDescription>
          사진 업로드 후, AI 최적화를 위해 얼굴 분석을 진행합니다!
        </S.ContentDescription>
      </S.ContentBox>
      <S.UploadBox>
        <S.UploadItem>
          <ImgCrop grid quality={1} modalTitle="Crop Image">
            <AntdUpload
              listType="picture-card"
              fileList={userImagefileList}
              onChange={userImageUploadHandler}
              showUploadList={{
                showPreviewIcon: false,
              }}
            >
              {userImagefileList.length < 1 && (
                <S.UploadContainer>
                  <FileImageOutlined />
                </S.UploadContainer>
              )}
            </AntdUpload>
          </ImgCrop>
          <S.UploadBoxText>User Image</S.UploadBoxText>
        </S.UploadItem>

        <S.UploadItem>
          <ImgCrop grid quality={1} modalTitle="Crop Image">
            <AntdUpload
              listType="picture-card"
              fileList={referenceImagefileList}
              onChange={referenceImageUploadHandler}
              showUploadList={{
                showPreviewIcon: false,
              }}
            >
              {referenceImagefileList.length < 1 && (
                <S.UploadContainer>
                  <FileImageOutlined />
                </S.UploadContainer>
              )}
            </AntdUpload>
          </ImgCrop>
          <S.UploadBoxText>Reference Image</S.UploadBoxText>
        </S.UploadItem>
      </S.UploadBox>

      <S.AgreeBox>
        <Checkbox checked={isChecked} onChange={checkHandler}>
          개인정보 수집 동의
        </Checkbox>
        {isChecked ? (
          <S.ButtonBox>
            분석하기
            <CaretRightOutlined />
          </S.ButtonBox>
        ) : (
          <S.WarningBox>
            <S.WarningMessage>
              업로드 하신 사진은 온라인과 오프라인 모두에서 외부로 유출되지
              않으며, 다른 어떠한 상업적 용도로도 사용되지 않습니다.
            </S.WarningMessage>
            <S.WarningMessage>
              다만, AI 학습을 통한 성능 개선의 연구 목적으로만 사용될 수 있으며,
              일정 기간이 지난 후에는 AI 데이터베이스에서 삭제됩니다.
            </S.WarningMessage>
          </S.WarningBox>
        )}
      </S.AgreeBox>
    </S.Container>
  );
}

export default Upload;
