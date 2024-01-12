import React from 'react';
import SubheadComponent from './SubheadComponent';
import LabelComponent from './LabelComponent';
import BackGroundComponent from './BackGroundComponent';

function ContentDesignComponent() {
  return (
    <div className="contentDesign">
      <SubheadComponent subheadText={'[ 꾸미기 ]'} />
      <div className="designArea">
        <BackGroundComponent />
        <div>
          <LabelComponent labelText={'[ 글자 ]'} />
        </div>
      </div>
    </div>
  );
}

export default ContentDesignComponent;
