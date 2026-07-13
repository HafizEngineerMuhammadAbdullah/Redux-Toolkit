import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increaseByAmount } from './redux/features/counterSlice';

// Provide the Redux Store to React
const App = () => {
  const [num, setNum] = React.useState(5);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>

      <button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button>

      <button onClick={() => {
        dispatch(increaseByAmount(Number(num)))
      }}>
        Increment by {num}
      </button>


      <input type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)} />
    </div>
  )
}

export default App
