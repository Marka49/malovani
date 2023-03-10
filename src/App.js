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
import ReactCanvasPaint from 'react-canvas-paint'
import 'react-canvas-paint/dist/index.css'
import './css.css'; 

let e;
  
export default function DrawingCanvasGfg(){

  function refreshPage() {
    window.location.reload(false);
  }
  

  return (
      
    <div>
      <h1></h1>
      <ReactCanvasPaint width={window.innerWidth - 10} height={window.innerHeight - 130} colors={['#7030A2', '#000000', '#0170C1', '#FE0002', '#FFFF01', '#45fa9f', '#484daf']}/>
      <button onClick={refreshPage} className="button-9">Reset</button>
    </div>
  );
};



