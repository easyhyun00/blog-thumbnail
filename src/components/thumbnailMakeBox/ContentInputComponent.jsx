import React, { useRef } from 'react';
import SubheadComponent from './SubheadComponent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ContentInputComponent() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
  };

  const CustomTextField = ({ label }) => {
    return (
      <TextField
        color="secondary"
        label={label}
        multiline
        maxRows={4}
        focused
      />
    );
  };

  return (
    <div className="contentInput">
      <SubheadComponent subheadText={'[ 입력 내용 ]'} />
      <CustomTextField label="[큰 주제]" />
      <CustomTextField label="[게시물 제목]" />
      <div>
        <input
          type="file"
          accept="image/jpeg, image/png"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CloudUploadIcon />}
          onClick={handleButtonClick}
        >
          아이콘 업로드
        </Button>
      </div>
    </div>
  );
}

export default ContentInputComponent;
