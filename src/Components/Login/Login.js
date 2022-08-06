import React from 'react'
import '../../App.css';
import './Login.css'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [pwdShow,setPwdShow]=useState(true);
  const [logData,setLogData]=useState({'username':"",'password':""})

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

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(logData);
    axios.post('http://localhost:8000/api/login/',logData).then((resp)=>{
      console.log(resp.data);
      if(resp.data===""){
        document.getElementById("logFailed").style.display="flex";
        setLogData({'username':"",'password':""})
      }
      else{
        localStorage.setItem("user",JSON.stringify(resp.data))
        window.location.reload();
        
      }
      
    }).catch((err)=>{
      console.log("user not found")
      document.getElementById("logFailed").style.display="flex";
      setLogData({'username':"",'password':""})
    })
  }

  return (
    <div>
      <div className="container">
      <div className="log-failed" id='logFailed'>
          <div>
            <h2>Login failed!</h2>
            <img src="/images/failed.png" alt="" />
            <button className='log-failed-btn' onClick={()=>{document.getElementById("logFailed").style.display="none"}} >Log In</button>
          </div>
        </div>
        <div className="logo">
            <img src="/images/instagram.png" alt="instagram logo" />
        </div>
        <div className="login-form">
            <form >
                <input type="text" name="username" id="" placeholder='Enter username' onChange={(e)=>setLogData({'username':e.target.value})} value={logData.username} />
                <div className='pwd-box'><input type="password" name="password" id="password" placeholder='Enter password' onChange={(e)=>setLogData({...logData,'password':e.target.value})} value={logData.password} />
                  <img src="/images/password-show.png" alt="" className="pwd-eye" id='pwd-eye' onClick={()=>handlePwdHide()} /></div>
                <input type="submit" value="Log In" onClick={(e)=>handleSubmit(e)} />
            </form>
        </div>
        <div className="afterdiv">
            <div className="line"></div>
            <div className="signup">Don't have an account? <span className='dark-font'><Link className='link' to='register/'>Sign up</Link></span></div>
        </div>
      </div>
    </div>
  )
}

export default Login
