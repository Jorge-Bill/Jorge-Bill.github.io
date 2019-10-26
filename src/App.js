import React from 'react';
import me from './img/avatar.jpeg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="Jorge Mendes" />
        <h1>
          Jorge Mendes
        </h1>
        <p>
         I'm a Web Developer
        </p>
        <a
          className="App-link"
          href="https://github.com/Jorge-Bill"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know me
        </a>
      </header>
    </div>
  );
}

export default App;
