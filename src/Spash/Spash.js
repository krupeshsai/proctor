import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles.css/Spash.css"

export default function Spash() {
  return (
    <div>
   <nav className='Nav'>
          <p>Proctor Vision</p>
          <div className='search'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder='search'/>
          </div>
          
           <div className='action'>
               <i className="fa-solid fa-window-minimize"></i>
               <i className='max'></i>
               <Link to="/proctor" className='linkStyle'>
               <i  className="fa-solid fa-xmark"></i>
               </Link>
           </div>  
   </nav>
   </div>
  )
}
