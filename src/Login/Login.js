import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import "../Styles.css/Login.css"
import Logo from "./logo.png"



export default function Login() {

 const [formData , setFormData] = useState({
   username:"",
   password:""
 })
 const [isSubmit, setIsSubmit] = useState(false);
 const [isValid, setIsValid] =useState(false)

 const formChange = (event) =>{
   const {name,value} = event.target
   setFormData({
     ...formData , 
    [name]: value})
 }

 const formSubmit = (event) =>{
  event.preventDefault();
  if(formData.username && formData.password){
    setIsValid(true)
  } 
 setIsSubmit(true) 
 
 }



  return (

    


   <div className='login'>
    <img src={Logo} alt="" />
   <div className="form">
   {isSubmit && isValid ? <Navigate to="/guideline"/> : null}
     <form onSubmit={formSubmit} >
       <input 
       type="text" 
       placeholder='Username' 
       name="username" 
       value={formData.username}
       onChange={formChange}
       />
       {isSubmit && !formData.username ? <span className='error'>! Please enter a username</span> : null }
       <input  
       type ="password" 
       placeholder='Password' 
       name="password" 
       value={formData.password}
       onChange={formChange}
       />
     {isSubmit && !formData.password ? <span className='error'>! Please enter a password</span> : null}
       <Link to="/passwordReset" className='reset'>
       <span>Reset Password From Default/</span> 
       <span>Forgot Password</span>
       </Link>


     <button className='formBtn'>Log In</button>
    
     </form>
   </div>

   </div>
  )
}
