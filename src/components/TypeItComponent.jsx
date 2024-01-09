import TypeIt from 'typeit-react';
import '../style/typeItStyle.css';

function TypeItComponent() {
  return (
    <h1 class="title">
      <TypeIt
        options={{ waitUntilVisible: true, loop: true }}
        getBeforeInit={(instance) => {
          instance
            .type('블로그 썸네일 만들기')
            .pause(1000)
            .delete(3)
            .pause(700)
            .type('메이커')
            .pause(1700);

          return instance;
        }}
      />
    </h1>
  );
}

export default TypeItComponent;
