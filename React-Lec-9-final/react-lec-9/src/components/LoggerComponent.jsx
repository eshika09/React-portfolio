import React from 'react'
import { useState, useEffect } from 'react'

function LoggerComponent() {
    const [count, setCount]=useState(0);
    useEffect(() => {
      alert("Component rendered or count changed", count);
    })
    function handleClick(){
        setCount(count+1);
    }
    return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>
        Increement
      </button>
    </div>
  )
}

export default LoggerComponent
