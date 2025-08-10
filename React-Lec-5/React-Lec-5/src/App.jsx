import { useState } from 'react'
import './App.css'

function App(){
function handleClick(){
  alert("Button has been clicked");
}
function handleMouse(){
  alert("Para ke upar mouse leke aaye ho");
}
return(
  <div>
    <p onMouseOver={handleMouse} style={{border:" 1px solid red"}}>I am a mouse</p>
    <button onClick={handleClick}>
      Click me
    </button>
  </div>
)

}

export default App
