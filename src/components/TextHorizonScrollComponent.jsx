import '../style/textHorizonScroll.css';

function TextHorizonScrollComponent() {
  const ScrollTitle = ({ text }) => {
    return (
      <div class="torizonScroll">
        <div>
          <p>
            &nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <ScrollTitle text="내가 원하는 블로그 썸네일을 자유롭게 제작하세요!" />
      <ScrollTitle text="https://github.com/easyhyun00/blog-thumbnail" />
    </>
  );
}

export default TextHorizonScrollComponent;
