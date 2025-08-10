import React from 'react'

function Hello(props) {
  return (
    <div>
      <h1 style={{color: props.textcolor}}>Hello, {props.username}</h1>
    </div>
  )
}

export default Hello
