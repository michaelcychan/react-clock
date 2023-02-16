import React, { useState } from 'react';
import logo from './logo.svg';
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
      <button onClick={() => handleClick()}>{toggleToNormal ? "Toggle Normal" : "Toggle Precise"}</button>
      {/* <ButtonWithProps text={toggleToNormal ? "Toggle Normal" : "Toggle Precise"} onClick={() => handleClick()} /> */}
    </div>
  );
}

export default App;
