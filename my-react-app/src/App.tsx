import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './demo/demo';
import DuckItem from './demo/DuckItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {ducks.map(duck => (
          <DuckItem duck={duck} key={duck.name}/>
        ))}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
