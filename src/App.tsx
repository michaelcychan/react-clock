import React, { useState } from 'react';
import './App.css';
import {ButtonWithProps} from './components/buttonWithProps';
import {Clock} from './components/clock';

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
      </header>
      <div className="App-body">
      
        <button onClick={() => handleClick()}>{toggleToNormal ? "Toggle Normal" : "Toggle Precise"}</button>
        {/* <ButtonWithProps text={toggleToNormal ? "Toggle Normal" : "Toggle Precise"} onClick={handleClick} /> */}
      </div>
      <footer className='App-footer'>

        <span className="circle">
          <span className="center-point" />
          <span className="clock-hand second-hand" />
          <span className="clock-hand minute-hand" />
          <span className="clock-hand hour-hand" />
        </span>
        
      </footer>
    </div>
  );
}

export default App;
