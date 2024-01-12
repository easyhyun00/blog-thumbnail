import '../../style/thumbnailMakeStyle.css';
import SubheadComponent from './SubheadComponent';
import ContentInputComponent from './ContentInputComponent';
import ContentDesignComponent from './ContentDesignComponent';

function ThumbnaillMakeComponent() {
  return (
    <div className="board">
      <div className="contentOutput">
        <SubheadComponent subheadText={'결과물'} />
      </div>
      <ContentInputComponent />
      <ContentDesignComponent />
    </div>
  );
}

export default ThumbnaillMakeComponent;
