import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Joke } from './img/App';
import { jokes } from './jokes.js';

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
