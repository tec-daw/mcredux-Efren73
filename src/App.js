import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/counter'

function App() {
  const counter = useSelector((state)=>{
    return state.counter.counter
  });

  const dispatcher = useDispatch();

  const handleIncrement =() =>{
    dispatcher(increment())
  }

  const handleDecrement = () =>{
    dispatcher(decrement(10))
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
