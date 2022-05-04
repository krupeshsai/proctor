import React, { useState } from 'react'
import "../Styles.css/demoExam.css"
import up from "../Home/up.png"
import down from "../Home/down.png"
import { useNavigate } from 'react-router-dom'



export default function ExamListing(props) {

  const navigate = useNavigate()
  const routeChange = () => {
    const path = "/check"
    navigate(path)
  }


  const [isOpen , setIsOpen] = useState(false)

  const toggle=() => {
    setIsOpen(prevState => ! prevState)
  }

  return (
  <div className='wrapper'>
    <div className="header">
      <div className='header-title' >
        <h4>{props.list.subject}</h4>
        <p> {props.list.code}</p>
      </div>
      <p onClick={toggle} >{isOpen ? <img src={up} alt="" /> : <img src={down} alt="" />}</p>
    </div>
    {isOpen && (
      <div className='main-dd'>
      <div className='main-list'>

      {/* /..........................1................./ */}
        <div className="main-item">
        <p>{props.list.test.test1}</p>
        <p> <span></span><span>{props.list.time}</span></p>
     <button onClick={routeChange}> {props.list.buttonText.text1} </button>
        </div>

        {/* /..........................2................./ */}
        <div className="main-item">
        <p>{props.list.test.test2}</p>
        <p> <span></span><span>{props.list.time}</span></p>
       <button>{props.list.buttonText.text2} </button>
        </div>

        {/* /..........................3................./ */}
        <div className="main-item">
        <p>{props.list.test.test3}</p>
        <p> <span></span><span>{props.list.time}</span></p>
       <button> {props.list.buttonText.text3}  </button>
        </div>

        {/* /..........................0................./ */}
        </div>
      </div>
    )}
  </div>

  
  )
}
