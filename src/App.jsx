import React from 'react';
import TypeItComponent from './components/TypeItComponent';
import WaveComponent from './components/WaveComponent';
import TextHorizonScroll from './components/TextHorizonScroll';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <WaveComponent />
        <h1 class="title">
          <TypeItComponent />
        </h1>
      </div>
      <TextHorizonScroll />
    </div>
  );
}

export default App;
