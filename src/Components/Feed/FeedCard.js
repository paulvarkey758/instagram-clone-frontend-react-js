import React from 'react'
import './Feed.css';
import '../../App.css';
import {useState} from 'react';

function FeedCard() {
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
            <img src="/images/profile-pic.png" alt="" className="pro-pic" />
            <div className="header-info">
                <div className="username">User_name</div>
                <div className="location">Location</div>
            </div>
        </div>
        <div className="card-post">
          <img src="/images/picture.jpg" alt="" className="post-picture" />
        </div>
        <div className="icon-container">
          <img src="/images/like-icon.png" alt="" className="icons" />
          <img src="/images/comment-icon.png" alt="" className="icons" />
          <img src="/images/share-icon.png" alt="" className="icons" />
        </div>
        <div className="likes-count">1,500 likes</div>
        <div className="caption-container">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, doloremque. At accusantium tempora sunt cumque, molestiae ad. Cum dolorum optio excepturi accusantium aperiam, doloribus at.</p>
          <div className="more-btn" onClick={(e)=>showCaption(e)}>more...</div>
        </div>
      </div>
    </div>
  )
}

export default FeedCard
