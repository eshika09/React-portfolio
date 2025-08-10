import React from 'react'
import { useState, useEffect } from 'react'

function MultiEffectComp() {
    const[count, setCount]=useState(0);
    const[seconds, setSeconds]=useState(0);
    useEffect(() => {
      alert("Count changed: ", {count});
    }, [count]);
    useEffect(() => {
      const intervalID=setInterval(()=>{
        setSeconds(prevSec=>prevSec+1);
      }, 1000);
      return () => {
        clearInterval(intervalID);
      }
    }, []);
    
        
    return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>
        Increement button
      </button>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComp
