import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'
import ExpensiveComponent from './components/ExpensiveComponent'

function App() {
  
  // const[count, setCount]=useState(0);
  // const handleClick=useCallback(
  //   () => {
  //   setCount(count+1);
  //   },
  //   [],
  // )
  
  return (
    <>
      {/* <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <br /> <br />
      <div>
        <ChildComponent buttonName="click me" onClick={handleClick}/>
      </div> */}
      <div>
        <ExpensiveComponent></ExpensiveComponent>
      </div>
    </>
  )
}

export default App
