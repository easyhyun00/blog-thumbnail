function TextHorizonScroll() {
  const ScrollTitle = ({ text }) => {
    return (
      <div className="animated-title">
        <div className="track">
          <div className="content">
            &nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;
            {text}
          </div>
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

export default TextHorizonScroll;
