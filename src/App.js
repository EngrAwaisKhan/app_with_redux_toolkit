import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Building Counter by using Redux Toolkit</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
