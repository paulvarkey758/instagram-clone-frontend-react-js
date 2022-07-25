import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import FeedPage from './Components/Feed/FeedPage';
import ProfilePage from './Components/Profile/ProfilePage';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="frame">
        <Router>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<SignUp/>} />
            <Route path='/home' element={<FeedPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
