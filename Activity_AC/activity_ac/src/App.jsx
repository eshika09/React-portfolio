import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'

function App() {

  return (
    <>
     <Hello username="Eshika" textcolor="yellow"></Hello> 
     <Hello username="Ashish" textcolor="pink"></Hello>
    </>
  )
}

export default App
