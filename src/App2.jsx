import './App.css';
import React from "react";
import TestClassComponent from "./2/TestClassComponent";
import Counter from "./2/Counter";
import { useState } from 'react';


function App2() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App2">

      {/* <TestClassComponent label="Test Label" ></TestClassComponent>
      <TestClassComponent></TestClassComponent><hr /> */}

      {/* <Counter></Counter> <hr /> */}

      {/* <button onClick={() => setCounter(counter + 1)}>increment app counter</button>
      <h1>{counter}</h1>
      <Counter appCounter={counter}></Counter> */}

      <Counter counter={counter} setCounter={setCounter}></Counter>

    </div>
  );
}

export default App2;