import React from 'react'
import '../../App.css';
import './Login.css';
import './SignUp.css';
import {useState} from 'react';

function SignUp() {
  const [regData,setRegData]=useState({'email':"",'name':"",'username':"",'password1':"",'password2':""});

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(regData);
    
  }
  return (
    <div>
      <div className="container">
        <div className="logo">
            <img src="/images/instagram.png" alt="instagram logo" />
        </div>
        <div className="login-form">
            <form action="">
                <input type="email" name="email" id="" placeholder='Email' onChange={(e)=>{setRegData({'email':e.target.value})}} />
                <input type="text" name="full-name" id="" placeholder='Full Name' onChange={(e)=>{setRegData({...regData,'name':e.target.value})}} />
                <input type="text" name="username" id="" placeholder='Username' onChange={(e)=>{setRegData({...regData,'username':e.target.value})}} />
                <input type="password" name="password1"  placeholder='Enter password' onChange={(e)=>{setRegData({...regData,'password1':e.target.value})}} />  
                <input type="password" name="password2" placeholder='conform password' onChange={(e)=>{setRegData({...regData,'password2':e.target.value})}} />  
                <input type="submit" value="Sign Up" onClick={(e)=>{handleSubmit(e)}} />
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
