import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import FeedPage from './Components/Feed/FeedPage';
import NewPost from './Components/NewPost/NewPost';
import ProfilePage from './Components/Profile/ProfilePage';
import EditProfile from './Components/Profile/EditProfile';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import {userContext} from './Components/Context';
import {useState} from 'react';

function App() {
  const [user,setUser]=useState()
  var userData=localStorage.getItem("user")
  console.log(userData)
  var usr
  if(userData!=="undefined" && userData!==null){
    usr=JSON.parse(userData)
  }
  else{
    usr=userData
  }
  console.log(usr)
  
  
  return (
    <div className="App">
      <div className="frame">
        <userContext.Provider value={usr}>
          <Router>
            <Routes>
              <Route path='/' element={usr!=="undefined"&&usr!==null?<FeedPage/>:<Login/>} /> 
              <Route path='/register' element={<SignUp/>} />
              <Route path='/profile' element={<ProfilePage/>} />
              <Route path='/newpost' element={<NewPost/>} />
              <Route path='/editprofile' element={<EditProfile/>} />
            </Routes>
          </Router>
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
