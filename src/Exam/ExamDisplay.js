import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "../Styles.css/Exam.css"
import Result from './Result'

const questions = [
  {
    questionText: 'Which of the following is the correct way to make the number three?',
    answerOptions: [
     
      { id:"1", answerText: '4 + 1', isCorrect: false },
      { id:"2", answerText: '1 + 3', isCorrect: false },
      { id:"3", answerText: '2 + 1', isCorrect: true },
      { id:"4", answerText: '1 + 5', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is the correct way to make the number seven?',
    answerOptions: [
    
      { id:"1", answerText: '2 + 1', isCorrect: false },
      { id:"2", answerText: '5 + 2', isCorrect: true },
      { id:"3", answerText: '4 + 2', isCorrect: false },
      { id:"4",  answerText: '7 + 1', isCorrect: false },
    ],
  },
  {

    questionText: "Let's find the sum of 41 and 20.",
    answerOptions: [
    
      { id:"1", answerText: '61', isCorrect: true },
      { id:"2", answerText: '51', isCorrect: false },
      { id:"3", answerText: '71 ', isCorrect: false },
      { id:"4",  answerText: '81', isCorrect: false },
    ],
  },
  {

    questionText: "Let's find the sum of 11, 9 and 16.",
    answerOptions: [
     
      { id:"1", answerText: '45', isCorrect: false },
      { id:"2", answerText: '33', isCorrect: false },
      { id:"3",  answerText: '26', isCorrect: false },
      { id:"4",  answerText: '36', isCorrect: true },
    ],
  },
  {

    questionText: "Consider the equation : 5 + 2 = __ + 6 . Let's identify the missing number that makes the equation true.",
    answerOptions: [
     
      { id:"1", answerText: '4', isCorrect: false },
      { id:"2", answerText: '2', isCorrect: false },
      { id:"3",  answerText: '1', isCorrect: true },
      { id:"4",  answerText: '5', isCorrect: false },
    ],
  },

  
];

const sum = questions.length

export default function ExamDisplay() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  const [showResult , setShowResult] = useState(false)
  const [clicked , setClicked] = useState(false)

 
 
  const pages = [];
  for (let i = 0; i <= questions.length; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    setClicked(false);
    const nextQuestion = currentQuestion - 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
   
  }


  const handleNext = () => {
    setClicked(false);
  	const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}else{
      setShowResult(true)
    }
      
  }


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
     
		}
    
    setClicked(true)
	};



  const finish = () => {
    setShowResult(true);
  }

 
  

  return (

     <div>

    { showResult ? 
      <Result
        score={score}
        sum={sum}
        percentage={(score / questions.length) * 100}
      /> :

      <div className='exam'>
    <div className='timer'>
        <p className='clock'> <span><i className="fa-solid fa-clock"></i></span> 
        </p>
        <div className='exmbtn'>
        <Link to="/demoexam"> <button className='exit'>Exit</button></Link>
        <button className='submit' onClick={finish}>Finish</button>
       </div>
    </div>
    <div className='box'>
          <div className='left-box'>
          <h2> Question {currentQuestion + 1}  / {sum} </h2> 

          <div className='ques-inner'>
         <p>{questions[currentQuestion].questionText}</p>
          </div>

        <div  className='answer'>
        
        {questions[currentQuestion].answerOptions.map((answer) => {
          return (
            <div  key={answer.id}>
            <button className={`ans-inner ${clicked ? answer.isCorrect ? "correct" : "wrong" : "not-selected"}`} onClick={() => handleAnswerOptionClick(answer.isCorrect)} disabled={clicked}>{answer.answerText}</button>
            </div>
          )
        }		
						)}
      
        </div>

        </div>

        <div className='right-box'>



        <div className='rb-inner'>
       {Array.from({length : sum}).map((item ,index) => (
          <div key={index} className="rb-box" ><p>1</p></div> ))}
        
      </div>  
            <div className='rb-btn'>
            <button className='rb-prev' onClick={handlePrev} 
            disabled={currentQuestion === pages[0] ? true : false} ><span><i className="fa-solid fa-angle-left"></i></span> Previous</button>
            <button onClick={handleNext } className='rb-next'
            > Next <span><i className="fa-solid fa-angle-right"></i></span></button>
            </div>
            
        </div>
    </div>
        
    </div>

    }
   


    </div>
  )
}



// disabled={currentQuestion === pages[pages - 0] ? true : false}