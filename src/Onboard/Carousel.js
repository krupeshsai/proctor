import React, { useState } from 'react'
import "../Styles.css/onBoard.css"
import one from "../Onboard/Imgaes/onboard1.png"
import two from "../Onboard/Imgaes/onboard2.png"
import three from "../Onboard/Imgaes/onboard3.png"
import four from "../Onboard/Imgaes/onboard4.png"
import Onboard from './Onboard'
import { Link } from 'react-router-dom'
import Skip from "./Skip"


export default function Guideline() {


    const onBoard = [
        {
        id:" 1",
        img : one,
        title: "We ensure that honesty pays",
        buttonText: "Continue",
        skip : <Skip/>
    },
    {   
        id: "2",
        img : two,
        title: "Custimize your assessment and proctoring needs",
        buttonText: "Continue",
        skip : <Skip/>
    },
    {
        id: "3",
        img : three,
        title: "Say no to false reports",
        buttonText: "Continue",
        skip : <Skip/>
    },
    {
        id: "4",
        img : four,
        title: "Protecting rights, respecting pricvacy",
        buttonText: <Link  to="/emptyhome" style={{textDecoration: "none",color:"#f5f5f5"}}>Go to dashboard</Link>
    },
]

    const [activeStep, setActiveStep] = useState(0)
    const length = onBoard.length

    const handleNext = () => {
      setActiveStep(activeStep === length - 1  ? 0 : activeStep + 1)
    }



    const moveDot = ()=> {
        setActiveStep(activeStep === length - 1 ? 0 : activeStep + 1)
    }


  return (
    <div >
    {onBoard.map((item, index) => {
        return (
            <div  key={index} className={index === activeStep ? "active-anim" : "slide " }>
             {index === activeStep && (   <Onboard
            item= {item} 
            moveSlide={handleNext}
        /> )} 
            </div>
           )
    })}
     

    <div  className="container-dot">
                {Array.from({length: 4}).map(( item ,index) => (
                    <div 
                    key={index}
                    onClick={moveDot}
                    className={activeStep === index  ? "dot-active" : "dot"}
                    ></div>
                ))}
            </div>
      



    </div>
  )
}

