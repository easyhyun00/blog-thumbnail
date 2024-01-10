import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../style/goCreateButton.css';

function GoCreateButtonComponent({ onClickButton }) {
  return (
    <div class="goCreate">
      <Button
        variant="outlined"
        size="large"
        endIcon={<KeyboardDoubleArrowDownIcon />}
        onClick={onClickButton}
      >
        블로그 썸네일 만들러 가기
      </Button>
    </div>
  );
}

export default GoCreateButtonComponent;
