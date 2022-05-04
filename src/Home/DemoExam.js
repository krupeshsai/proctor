import React  from 'react'
import { Link } from 'react-router-dom'
import "../Styles.css/demoExam.css"
import ExamListing from './ExamListing'


const examsList = [
  {
    id:1,
    subject:"Math",
    code:"Code M12345",
    test : {
    test1:  "Addition",
    test2: "Subtraction",
    test3: "Multiplication"
    },
    time: "10Mins",
    buttonText:{
      text1:"Join exam",
      text2: "Yet to Start",
      text3: "Yet to Start"
    }
   
  },
  {
    id:2,
    subject:"Physics",
    code:"Code P12345",
    test : {
    test1:  "Speed, Distance , Time ",
    test2: "Basic fundamentals of physics",
    test3: "Basic Physics"
    },
    time: "15Mins",
    buttonText:{
      text1: "Yet be start",
      text2: "Yet be start",
      text3: "Yet be start"
    }
  },

   
]


export default function DemoExam() {



  return (
   <div>
   <div className='demoexam'>
        <div className="exam">
            <h2>Demo exam</h2>
        </div>
    </div>
    

     {examsList.map(list => (
     <ExamListing
       key={list.id}
       list={list}
       
     />
     ))}
     <Link className='demolink' to="/emptyhome">Go to dashboard</Link>
   </div>
  )
}
