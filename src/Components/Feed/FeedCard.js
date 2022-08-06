import React from 'react'
import './Feed.css';
import '../../App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

function FeedCard(props) {

  const [user,setUser]=useState({"username":"user"})
  useEffect(()=>{
    axios.get('http://localhost:8000/api/show/').then((resp)=>{
      console.log(resp.data)
      resp.data.map((uobj,index)=>{
        if(uobj.id===props.object.user){
          setUser(uobj)
        }
      })
    })
  },[])
  console.log(user)
  const [showCaptions,setShowCaptions]=useState(true);

  const showCaption=(e)=>{
    
    if (showCaptions===true){
      e.target.parentNode.style.height="auto";
      e.target.innerHTML="less.."
    }
    else{
      e.target.parentNode.style.height="3rem";
      e.target.innerHTML="more..."
    }
    setShowCaptions(!showCaptions);
    
  }

  return (
    <div>
      <div className="feed-card">
        <div className="card-header">
            <img src={`http://localhost:8000${user.profilePic}`} alt="" className="pro-pic" />
            <div className="header-info">
                <div className="username">{user.username}</div>
                <div className="location">{props.object.location}</div>
            </div>
        </div>
        <div className="card-post">
          <img src={`http://localhost:8000${props.object.post}`} alt="" className="post-picture" />
        </div>
        <div className="icon-container">
          <img src="/images/like-icon.png" alt="" className="icons" />
          <img src="/images/comment-icon.png" alt="" className="icons" />
          <img src="/images/share-icon.png" alt="" className="icons" />
        </div>
        <div className="likes-count">1,500 likes</div>
        <div className="caption-container">
          <p>{props.object.caption}</p>
          <div className="more-btn" onClick={(e)=>showCaption(e)}>more...</div>
        </div>
      </div>
    </div>
  )
}

export default FeedCard
