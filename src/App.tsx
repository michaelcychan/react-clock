import React, { useState } from 'react';
import './App.css';
import {Clock} from './components/clock';
import {AnalogClock} from './components/analogClock';

function App() {

  const [toggleToNormal, setToggleToNormal]  = useState<boolean>(false);

  const handleClick = () => {
    setToggleToNormal((prevState) => !prevState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Typescript Clock
        </h1>
        <Clock isPrecise={toggleToNormal} />
        <button onClick={() => handleClick()}>{toggleToNormal ? "Toggle Normal" : "Toggle Precise"}</button>
      </header>
      <div className="App-body">
        <AnalogClock />
      </div>
      <footer className='App-footer'>
      </footer>
    </div>
  );
}

export default App;
