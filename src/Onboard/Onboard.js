import React from 'react'
import "../Styles.css/onBoard.css"
import "../Styles.css/Content.css"





export default function Onboard(props) {

  return (
      <div>
      <div className='onBoard'>
      <img src={props.item.img} alt="" />
      <h2>{props.item.title}</h2>
      <button className='onbtn' onClick={ props.moveSlide}  > {props.item.buttonText} <i className="fa-solid fa-angle-right"></i> </button>
      </div>

      {props.item.skip}

      
  
      
    </div>
  )
}
