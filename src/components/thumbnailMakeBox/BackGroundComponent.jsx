import React, { useState, useRef, useEffect } from 'react';
import LabelComponent from './LabelComponent';
import { ChromePicker } from 'react-color';

function BackGroundComponent() {
  const [firstColor, setFirstColor] = useState('#051937');
  const [secondColor, setSecondColor] = useState('#A8EB12');

  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);

  const backgroundRef = useRef();

  const first = (color) => {
    console.log(color);
    setFirstColor(color.hex);
  };

  const second = (color) => {
    console.log(color);
    setSecondColor(color.hex);
  };

  const getBrightness = (color) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    return 0.299 * r + 0.587 * g + 0.114 * b;
  };

  const getTextColor = (backgroundColor) => {
    return getBrightness(backgroundColor) < 128 ? 'white' : 'black';
  };

  const onClickFirst = () => {
    setFirstVisible(!firstVisible);
  };

  const onClickSecond = () => {
    setSecondVisible(!secondVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        backgroundRef.current &&
        !backgroundRef.current.contains(event.target)
      ) {
        setFirstVisible(false);
        setSecondVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [backgroundRef]);

  return (
    <div>
      <LabelComponent labelText={'[ 배경 ]'} />
      <div className="background" ref={backgroundRef}>
        <div>
          <input
            readOnly
            type="text"
            value={firstColor}
            onClick={onClickFirst}
            style={{
              backgroundColor: firstColor,
              color: getTextColor(firstColor),
            }}
          />
          {firstVisible && (
            <ChromePicker color={firstColor} onChangeComplete={first} />
          )}
        </div>
        <div>
          <input
            readOnly
            type="text"
            value={secondColor}
            onClick={onClickSecond}
            style={{
              backgroundColor: secondColor,
              color: getTextColor(secondColor),
            }}
          />
          {secondVisible && (
            <ChromePicker color={secondColor} onChangeComplete={second} />
          )}
        </div>
      </div>
    </div>
  );
}

export default BackGroundComponent;
