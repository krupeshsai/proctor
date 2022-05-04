import React from 'react'
import Frame from "./Icons/Frame.png"
import "../Styles.css/LoginBox.css"
import { Link } from 'react-router-dom'


export default function LoginBox() {
  return (
    <div className='loginBox'>

    <div className='boxInner'> 
    <img src={Frame} alt="" />       
    <h2>Welcome aboard </h2> 
    <h2>to the future in the making</h2> 
    <h2>you’ve just become a part of it </h2>
    <Link to="/login">
    <button className='btn'> Continue <i className="fa-solid fa-angle-right"></i> </button>
    </Link>

    
    </div>

    </div>
  )
}
