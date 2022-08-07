import React from 'react'
import './Footer.css';
import FooterButton from './FooterButton';
import {BrowserRouter as Router,Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <Link to="/"><FooterButton image="home-icon" /></Link>
      <FooterButton image="search-icon" />
      <Link to="/newpost"><FooterButton image="add-icon" /></Link>
      <FooterButton image="like-icon" />
      <Link to="/profile"><FooterButton image="profile-icon" /></Link>
    </div>
  )
}

export default Footer
