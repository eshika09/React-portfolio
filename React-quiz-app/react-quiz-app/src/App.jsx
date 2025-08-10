import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMenu from './components/MainMenu'
import EndScreen from './components/EndScreen'
import { QuizContext } from './Helpers/Contexts'
import Quiz from './components/Quiz'

function App() {
  const [gameState, setGameState]=useState("menu");
  const [score, setScore]=useState(0);
  return (
    <>
    <div className="App">
    <h1>Quiz App</h1>
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
    {gameState==="menu"&&<MainMenu/>}
    {gameState==="quiz"&&<Quiz/>}
    {gameState==="endScreen"&&<EndScreen/>}
    </QuizContext.Provider>
    </div>
    </>
  )
}

export default App
