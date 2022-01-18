import React from 'react';
import './Counter.css';
import useLocalStorageState from './hooks/useLocalStorageState'

const Counter = () => {
  const [count, setCount] = useLocalStorageState('count', 0);

  const incrementCount = () => {
    setCount(count => count + 1)
  };
  const decrementCount = () => {
    setCount(count => count - 1)
  };

  return (
    <div className="Counter-dark">
      <h4>{count}</h4>
      <button onClick={decrementCount}>-1</button>
      <button onClick={incrementCount}>+1</button>
    </div>
  )
}

export default Counter;
