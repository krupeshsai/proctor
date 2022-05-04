import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles.css/Check.css"
import left from "./left.png"
import pic from "./pic.png"

export default function Check() {
  return (
    <div className='check'>
     
       <Link to="/demoexam" className='check-link'>
        <h2> <img src={left} alt="" /> Graduate Record Examination</h2></Link>

        <div className='check-main'>
        <img className='pic' src={pic} alt="" />
        <div className='check-info'>
        <p className="q">  <span className='span tick q'><i className="fa-solid fa-check"></i></span>    Webcam check </p>
        <p className="w"> <span className='span tick w'><i className="fa-solid fa-check"></i></span>    Mic testing</p>
        <p className="e"> <span className='span cross e'> <i className="fa-solid fa-xmark"></i></span>   α Iris sync </p>
        <p className="r"> <span className='span cross r'><i className="fa-solid fa-xmark"></i></span>    BT / Alien hardware detection </p>
        <p className="t"> <span className='span tick t'><i className="fa-solid fa-check"></i></span>    QR / Virtual Machine detection </p>
        <p className="y"> <span className='span spin y'><i className="fa-solid fa-spinner"></i> </span>   Browser lock </p>
        <p className="u"> <span className='span spin u'><i className="fa-solid fa-spinner"></i></span>    Screen capture </p>
        <p className="i"> <span className='span spin i'><i className="fa-solid fa-spinner"></i> </span>   Identity authentication </p>
        <Link to="/exam"><button className='w'>Start exam</button> </Link> 
        </div>
      
       
        </div>  
    </div>
  )
}
