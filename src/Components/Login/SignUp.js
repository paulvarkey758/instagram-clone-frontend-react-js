import React from 'react'
import '../../App.css';
import './Login.css';
import './SignUp.css';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function SignUp() {
  const [regData,setRegData]=useState({'email':"",'name':"",'username':"",'password':"",'password2':""});

  const formValidator=(field,message)=>{
    field.innerHTML=message;
    field.classList.add("show-error");
    field.nextElementSibling.style.borderColor="red";
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(regData);

    //form validation section
    var count=0;
    var emField=document.getElementById("emailError");
    var nmField=document.getElementById("nameError");
    var usrnmField=document.getElementById("usernameError");
    var pwdField=document.getElementById("passwordError");
    var pwd2Field=document.getElementById("password2Error");
    if(regData['email'] !== ""){
      if(!regData['email'].includes('@')){
        formValidator(emField,"Emailformat error")
        count=count-1;
      }
    }
    else{
      formValidator(emField,"This field is required")
      count=count-1;
    }

    if(regData['name'] === undefined){
      formValidator(nmField,"This field is required")
      count=count-1;
    }
    
    if(regData['username'] !== undefined){
      if(regData['username'].includes(" ")){
        formValidator(usrnmField,"enter uaser name without spaces")
        count=count-1;
      }
    }
    else{
      formValidator(usrnmField,"This field is required")
      count=count-1;
    }

    if(regData['password'] !== undefined){
      if(regData['password'].length<8){
        formValidator(pwdField,"password should contain 8 characters")
        count=count-1;
      }
    }
    else{
      formValidator(pwdField,"This field is required")
      count=count-1;
    }

    if(regData['password2'] !== undefined){
      if(regData['password2'] !== regData['password']){
        formValidator(pwd2Field,"passwords are not matching")
        count=count-1;
      }
    }
    else{
      formValidator(pwd2Field,"This field is required")
      count=count-1;
    }
    
    if(count===0){
      axios.post('http://localhost:8000/api/register/',regData).then((resp)=>{
        console.log(resp.data);
        document.getElementById("registered").style.display="flex";
      }).catch((err)=>{
        console.log("posting error");
      });
    }
    setRegData({'email':"",'name':"",'username':"",'password':"",'password2':""})
  }
  return (
    <div>
      <div className="container">
        <div className="registered" id='registered'>
          <div>
            <h2>Registered!</h2>
            <img src="/images/verified.png" alt="" />
            <Link className='link' to="/"><button className='registerd-btn' >Log In</button></Link>
          </div>
        </div>
        <div className="logo">
            <img src="/images/instagram.png" alt="instagram logo" />
        </div>
        <div className="login-form">
            <form action="">
                <div id="emailError" className="error-msg"></div>
                <input type="email" name="email" id="" placeholder='Email' onChange={(e)=>{setRegData({'email':e.target.value})}} value={regData.email} />
                <div id="nameError" className="error-msg"></div>
                <input type="text" name="full-name" id="" placeholder='Full Name' onChange={(e)=>{setRegData({...regData,'name':e.target.value})}} value={regData.name} />
                <div id="usernameError" className="error-msg"></div>
                <input type="text" name="username" id="" placeholder='Username' onChange={(e)=>{setRegData({...regData,'username':e.target.value})}} value={regData.username} />
                <div id="passwordError" className="error-msg"></div> 
                <input type="password" name="password"  placeholder='Enter password' onChange={(e)=>{setRegData({...regData,'password':e.target.value})}} value={regData.password} /> 
                <div id="password2Error" className="error-msg"></div> 
                <input type="password" name="password2" placeholder='conform password' onChange={(e)=>{setRegData({...regData,'password2':e.target.value})}} value={regData.password2} /> 
                <input type="submit" value="Sign Up" onClick={(e)=>{handleSubmit(e)}} />
            </form>
        </div>
        <div className="signup">Do you already have an account? <span className='dark-font'><Link className='link' to='/'>Log in</Link></span></div>
      </div>
    </div>
  )
}

export default SignUp
