import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function TimerComponent() {
    const[seconds, setSeconds]=useState(0);
    useEffect(() => {
      const intervalID=setInterval(()=>{
        setSeconds(prevSec=>prevSec+1);
      }, 1000);
    
      return () => {
        clearInterval(intervalID);
      };
    }, [])
    
    return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
