import React from 'react';
import '../../App.css';
import '../Footer/Footer.css';
import './ProfilePage.css';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
import {userContext} from '../Context';
import {useContext,useEffect,useState} from 'react';
import axios from 'axios';

function ProfilePage() {
  const user=useContext(userContext)
  console.log(user)
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/fetch-profile/${user.token}/`).then((resp)=>{
      setPosts(resp.data);
    }).catch((err)=>{
      console.log("Error while fetching posts");
    })
  },[])

  const handleLogout=()=>{
    localStorage.setItem("user",JSON.stringify())
    console.log("clicked")
    window.location="/"
    console.log(localStorage.getItem("user"))
  }
  return (
    <div className='profile-page'>
      <div className="header">
        <h2 className="profile-username">{user.username}</h2>
      </div>
      <div className="feed-wrapper">
        <div className="pro-details">
            <div className="profile-pic">
                <img src={`http://localhost:8000${user.profilePic}`} alt="" />
            </div>
            <div className="details">
                <div>
                    <span>50</span>
                    <span>Posts</span>
                </div>
                <div>
                    <span>100</span>
                    <span>Followers</span>
                </div>
                <div>
                    <span>100</span>
                    <span>Following</span>
                </div>
            </div>
        </div>
        <div className="bio-box">
                <p>{user.bio}</p>
                
        </div>
        <div className="edit-btn">Edit Profile</div>
        <div className="edit-btn" onClick={()=>handleLogout()}>Log Out</div>
        {
          posts.map((obj,index)=>{
            return(
              <ProfileCard object={obj}/>
            )
          })
        }
        
        </div>
      <Footer/>
    </div>
  )
}

export default ProfilePage
