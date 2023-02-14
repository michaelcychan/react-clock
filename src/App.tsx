import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonWithProps} from './components/buttonWithProps';
import {Clock} from './components/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Typescript Clock
        </h1>
        <Clock />
      </header>
      <ButtonWithProps text="test" />
    </div>
  );
}

export default App;
