import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Conway's game of life!</p>
      </header>
      <main>
        <stimulation/>
      </main>
    </div>
  );
}

export default App;
