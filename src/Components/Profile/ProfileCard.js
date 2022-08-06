import React from 'react'
import './ProfilePage.css';
import '../../App.css';

function ProfileCard(props) {
  return (
    <div className='profile-card'>
        <div>
            <img className='post-picture-sml' src={`http://localhost:8000${props.object.post}`} alt="" />
        </div>
      
    </div>
  )
}

export default ProfileCard
