import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Joke } from './components/App';
import { jokes } from './jokes.js';

const App = () => {
  return (
    <>
      <div>
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
