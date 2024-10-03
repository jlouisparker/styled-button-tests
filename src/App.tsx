import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { BUTTON_TYPE_CLASSES } from './components/button/button.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='buttonContainer'>
          <Button>Base</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google}>Google</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Inverted</Button>
          <Button isLoading buttonType={BUTTON_TYPE_CLASSES.inverted}>Inverted Loading...</Button>
          <Button isLoading buttonType={BUTTON_TYPE_CLASSES.base}>Base Loading...</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
