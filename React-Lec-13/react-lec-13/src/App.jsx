import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'

function App() {
  const [amount, setAmount]=useState(0);
  const count=useSelector((state)=>{
     return state.counter.value
});
  const dispatch=useDispatch();
  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());

  }
  function handleResetclick(){
    dispatch(reset());
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
     <div className='container'>
      <button onClick={handleIncrementClick}>
      +
      </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetclick}>Reset</button>
      <br />
      <br />
      <input type='Number'
      value={amount}
      placeholder="enter amount"
      onChange={(e)=>setAmount(Number(e.target.value))} />
      <br />
      <br />
      <button onClick={handleIncAmountClick}>Increment by Amount</button>
      </div> 
    </>
  )
}

export default App
