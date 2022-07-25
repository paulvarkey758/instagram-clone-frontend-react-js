import React from 'react';
import '../../App.css';
import '../Footer/Footer.css';
import './ProfilePage.css';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';

function ProfilePage() {
  return (
    <div className='profile-page'>
      <div className="header">
        <h2 className="profile-username">User_name</h2>
      </div>
      <div className="feed-wrapper">
        <div className="pro-details">
            <div className="profile-pic">
                <img src="/images/profile-pic.png" alt="" />
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta labore earum optio, dolorum sint.</p>
                
        </div>
        <div className="edit-btn">Edit Profile</div>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        </div>
      <Footer/>
    </div>
  )
}

export default ProfilePage
