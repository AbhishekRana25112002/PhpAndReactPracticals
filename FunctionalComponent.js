import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';

function Counter() {
  // Initialize state with count set to 0
  const [count, setCount] = useState(0);

  // Function to increment the counter
  function increment() {
    setCount(count + 1);
  }

  // Function to decrement the counter
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Counter/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
