import React from 'react'
import "../Styles.css/Result.css"
import Logo from "../Login/logo.png"

import { useNavigate } from 'react-router-dom'

export default function Result(props) {

    const navigate = useNavigate()
    const routeChange = () => {
      const path = "/demoexam"
      navigate(path)
    }

  return (


  

    <div className='result'>
        <img src={Logo} alt="" />
        <div className='result-inner'>
        <h2>Final Results</h2>
        <h3> {props.score} out of {props.sum} Correct - <span> ({props.percentage}%)</span> </h3>
        <p></p>
        <button onClick={routeChange}>Finished</button>
        </div>
    </div>
  )
}

