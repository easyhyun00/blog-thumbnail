import React from 'react';
import TypeItComponent from './components/TypeItComponent';
import WaveComponent from './components/WaveComponent';
import TextHorizonScroll from './components/TextHorizonScrollComponent';

function App() {
  return (
    <div>
      <div>
        <WaveComponent />
        <TypeItComponent />
      </div>
      <TextHorizonScroll />
    </div>
  );
}

export default App;
