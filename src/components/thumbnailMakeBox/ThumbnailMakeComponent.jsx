import '../../style/thumbnailMakeStyle.css';
import SubheadComponent from './SubheadComponent';
import ContentInputComponent from './ContentInputComponent';

function ThumbnaillMakeComponent() {
  return (
    <div className="board">
      <div className="contentOutput">
        <SubheadComponent subheadText={'결과물'} />
      </div>
      <ContentInputComponent />
      <div className="contentDesign">
        <SubheadComponent subheadText={'꾸미기'} />
      </div>
    </div>
  );
}

export default ThumbnaillMakeComponent;
