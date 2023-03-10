/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;*/


import React from "react";
import ReactCanvasPaint from './canvas'
import 'react-canvas-paint/dist/index.css'
import { useState } from "react";
import './css.css'; 
import Menu from "./Menu";
  
export default function DrawingCanvasGfg(){

  const [lineColor, setLineColor] = useState("black");

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
      
    <div>
      <h1 className="head">Malováníčko</h1>
      <ReactCanvasPaint width={window.innerWidth - 10} height={window.innerHeight - 130} colors={[lineColor]}/>
      <Menu setLineColor={setLineColor}/>
      <button onClick={refreshPage} className="button-9">Reset</button>
    </div>
  );
};



