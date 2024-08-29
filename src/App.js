import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import React, { useState } from 'react';
import { VoltingItems } from './VoltingItems';


function App() {
  const nombre = "Mati";
  const nombre1 = "Leandro";
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          La BEST Mati
        </a>
        <VoltingItems/>
        hola {nombre}. <div>Cantidad de votos = {count} </div>
        <Counter nombre={nombre}  updateCount={increaseCount} />
        <Counter nombre={nombre1} updateCount={increaseCount} />
      </header>
    </div>
  );
}

export default App;