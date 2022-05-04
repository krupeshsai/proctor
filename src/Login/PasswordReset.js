import React from 'react'
import Logo from "./logo.png"
import { Link } from 'react-router-dom'

export default function PasswordReset() {
  return (
    <div className='login'>
    <img src={Logo} alt="" />
   <div className="form">
  
     <form>

       <input type="text" placeholder='Username'/>
       <input type="password" placeholder='New Password' />
       <input type ="password" placeholder='Confirm Password'/>
       <Link  to="/login" style={{textDecoration : "none"}}> <button className='formBtn'>Reset</button>  </Link>
       <Link  to="/login" className='reset'> Go Back To Log In </Link>
     </form>
   </div>

   </div>
  )
}
