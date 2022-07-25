import React from 'react'
import '../../App.css';
import './Login.css'
import {useState} from 'react'

function Login() {
  const [pwdShow,setPwdShow]=useState(true);
  const handlePwdHide=()=>{
    setPwdShow(!pwdShow);
    if(pwdShow===true){
      console.log("hide everything");
      document.getElementById("pwd-eye").src="/images/password-hide.png";
      document.getElementById("password").type="text";
    }
    else{
      console.log("show everything");
      document.getElementById("pwd-eye").src="/images/password-show.png";
      document.getElementById("password").type="password";
    }
  }
  return (
    <div>
      <div className="container">
        <div className="logo">
            <img src="/images/instagram.png" alt="instagram logo" />
        </div>
        <div className="login-form">
            <form action="" method='get'>
                <input type="text" name="username" id="" placeholder='Enter username' />
                <div className='pwd-box'><input type="password" name="password" id="password" placeholder='Enter password' />
                  <img src="/images/password-show.png" alt="" className="pwd-eye" id='pwd-eye' onClick={()=>handlePwdHide()} /></div>
                <input type="submit" value="Log In" />
            </form>
        </div>
        <div className="afterdiv">
            <div className="line"></div>
            <div className="signup">Don't have an account? <span className='dark-font'>Sign up</span></div>
        </div>
      </div>
    </div>
  )
}

export default Login
