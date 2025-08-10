import { useState, useContext } from "react"
import React from 'react'
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Contexts";
function Quiz() {
    const {score, setScore, setGameState}=useContext(QuizContext);
    const[currQuestion, setcurrQuestion]=useState(0);
    const[optionChosen, setoptionChosen]=useState("");
    let newscore=score;
    const nextQuestion=()=>{
        if(Questions[currQuestion].answer==optionChosen){
            newscore=score+1;
            setScore(newscore);
        }
        alert(newscore);
        setcurrQuestion(currQuestion+1);
    }
    const finishQuiz=()=>{
        if(Questions[currQuestion].answer==optionChosen){
            setScore(score+1);
        }
        setGameState("endScreen");
    }
  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={()=>setoptionChosen("A")}>{Questions[currQuestion].optionA}</button>
        <button onClick={()=>setoptionChosen("B")}>{Questions[currQuestion].optionB}</button>
        <button onClick={()=>setoptionChosen("C")}>{Questions[currQuestion].optionC}</button>
        <button onClick={()=>setoptionChosen("D")}>{Questions[currQuestion].optionD}</button>
      </div>
      {currQuestion==Questions.length-1?(
        <button onClick={finishQuiz}>Finish Quiz</button>
      ):(
        <button onClick={nextQuestion}>Next Question</button>
      )}
      
    </div>
  )
}

export default Quiz
