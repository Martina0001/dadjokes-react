import React, { useState } from 'react';

import './style.css';

const App = () => {
  return (
    <>
      <div class="container">
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          ></Joke>
        ))}
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
