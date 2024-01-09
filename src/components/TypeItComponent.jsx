import TypeIt from 'typeit-react';

function TypeItComponent() {
  return (
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
  );
}

export default TypeItComponent;
