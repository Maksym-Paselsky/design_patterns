import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStateHook } from "./SimpleStateManager";
function App() {
  const useCounter = createStateHook(0);
  const [count, setCount] = useCounter();

  const Counter = () => {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  };

  return (
    <div className="App">
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
