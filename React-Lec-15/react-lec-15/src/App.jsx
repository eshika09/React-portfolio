import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react';

function App() {
  const[count, setCount]=useState(0);
  const[input, setInput]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  function expensivetask(num){
    console.log("Inside expensive task");
    for(let i=0; i<1000000000; i++){}
    return num*2;
  }
  // let doubleValue=expensivetask(4);
  // let doubleValue=expensivetask(input);
     let doubleValue=useMemo(() => expensivetask(input), [input])
  return (
    <>
      <div>
      <h1>Count is: {count}</h1>
      <button onClick={handleClick}>Increement</button>
      </div>
      <div>
        Double is: {doubleValue}
        <br />
      </div>
      <div>
        <input type="number" placeholder='Enter a number' value={input} onChange={(e)=>setInput(e.target.value)} />
      </div>
    </>
  )
}

export default App
