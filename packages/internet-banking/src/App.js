import React from 'react';
import {Button, InputText} from "@batman/ui-components";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button/>
          <InputText/>
        </header>

      </div>
  );
}

export default App;