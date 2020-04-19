import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions/index'
import { decrement } from './actions/index'
import Root from './component/Root'
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch( )
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
      {isLogged ? <h3>Valuable Information</h3> : null}
      <Root />
    </div>
  );
}

export default App;
