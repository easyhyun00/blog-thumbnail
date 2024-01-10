import React, { useRef, useState, useEffect } from 'react';
import TypeItComponent from './components/TypeItComponent';
import WaveComponent from './components/WaveComponent';
import TextHorizonScroll from './components/TextHorizonScrollComponent';
import GoCreateButton from './components/GoCreateButtonComponent';
import PhotoButtonComponent from './components/PhotoButtonComponent';
import SubTitleComponent from './components/SubTitleComponent';
import './App.css';

function App() {
  const selectForm = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToDown = () => {
    if (!isVisible) {
      setIsVisible(true);
    } else {
      scrollIntoView();
    }
  };

  const scrollIntoView = () => {
    if (selectForm.current) {
      selectForm.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    if (isVisible) {
      scrollIntoView();
    }
  }, [isVisible]);

  return (
    <>
      <div>
        <div>
          <WaveComponent />
          <TypeItComponent />
        </div>
        <TextHorizonScroll />
        <GoCreateButton onClickButton={scrollToDown} />
      </div>
      {isVisible && (
        <div ref={selectForm} className="secondDiv">
          <SubTitleComponent subtitleText={'원하는 템플릿을 선택하세요.'} />
          <PhotoButtonComponent />
        </div>
      )}
    </>
  );
}

export default App;
