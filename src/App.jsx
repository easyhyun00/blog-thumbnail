import React, { useRef, useState, useEffect } from 'react';
import TypeItComponent from './components/TypeItComponent';
import WaveComponent from './components/WaveComponent';
import TextHorizonScroll from './components/TextHorizonScrollComponent';
import GoCreateButton from './components/GoCreateButtonComponent';
import PhotoButtonComponent from './components/PhotoButtonComponent';
import SubTitleComponent from './components/SubTitleComponent';
import './App.css';

function App() {
  const selectTemplateRef = useRef();
  const makeThumbnailRef = useRef();
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);

  const scrollToSecond = () => {
    if (!isVisibleSecond) setIsVisibleSecond(true);
    else scrollToRef(selectTemplateRef);
  };

  const scrollToThrid = () => {
    if (!isVisibleThird) setIsVisibleThird(true);
    else scrollToRef(makeThumbnailRef);
  };

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    if (isVisibleThird) scrollToRef(makeThumbnailRef);
    else if (isVisibleSecond) scrollToRef(selectTemplateRef);
  }, [isVisibleThird, isVisibleSecond]);

  return (
    <>
      <div>
        <div>
          <WaveComponent />
          <TypeItComponent />
        </div>
        <TextHorizonScroll />
        <GoCreateButton onClickButton={scrollToSecond} />
      </div>
      {isVisibleSecond && (
        <div ref={selectTemplateRef} className="secondDiv">
          <SubTitleComponent subtitleText={'원하는 템플릿을 선택하세요.'} />
          <PhotoButtonComponent onClickImage={scrollToThrid} />
        </div>
      )}
      {isVisibleThird && (
        <div ref={makeThumbnailRef} className="thirdDiv">
          <h1>세번째</h1>
        </div>
      )}
    </>
  );
}

export default App;
