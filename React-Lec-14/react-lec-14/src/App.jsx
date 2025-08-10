import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count, setCount]=useState(0);
  // let val=1;
//   let val=useRef(0);
//   function handleClick(){
//     val.current=val.current+1;
//     console.log("Value of val is", val.current);
//     setCount(count+1);
//   }
//   function changeColour(){
//     btnref.current.style.backgroundColor="red";
//   }
//   useEffect(() => {
//     console.log("I have rendered");
// })
//   let btnref=useRef();

const [time, setTime]=useState(0);
let timerRef=useRef(null);
function startTimer(){
timerRef.current=setInterval(()=>{
  setTime(time=>time+1)
}, 1000);
}
function stopTimer(){
clearInterval(timerRef.current);
timerRef.current=null;

}
function resetTimer(){
stopTimer();
setTime(0);

}
  
  return (
    <>
      {/* <p>Count is: {count}</p>
      <button ref={btnref} onClick={handleClick}>
        Click
      </button>
      <br />
      <br />
      <button onClick={changeColour}>
        Change colour of 1st button
      </button>
      <br /> */}

        <div>
          <h1>Stopwatch: {time}seconds</h1>
          <button onClick={startTimer}>Start</button>
          <br /> <br />
          <button onClick={stopTimer}>Stop</button>
          <br /> <br />
          <button onClick={resetTimer}>Reset</button>
        </div>

    </>
  )
}

export default App
