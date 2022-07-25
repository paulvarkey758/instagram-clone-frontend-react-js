import React from 'react'
import './Footer.css';
import FooterButton from './FooterButton';
import {BrowserRouter as Router,Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <Link to="/home"><FooterButton image="home-icon" /></Link>
      <FooterButton image="search-icon" />
      <FooterButton image="add-icon" />
      <FooterButton image="like-icon" />
      <Link to="/profile"><FooterButton image="profile-icon" /></Link>
    </div>
  )
}

export default Footer
