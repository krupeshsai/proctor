import React from 'react'
import home from "./class.png"
import "../Styles.css/emptyhome.css"
import { Link } from 'react-router-dom'




export default function EmptyHome() {
  return (
    <div className='emptyhome'>
      <h2>My Classes</h2>
    <div className='home'>
    <img src={home} alt="" />
    <h2>You’re are yet to be added to a class,
     till then you can relax</h2>
    </div>
    <Link to="/demoexam" style={{color: "#f5f5f5"}}>Take Demo Exam</Link>
   
     
    </div>
  )
}
