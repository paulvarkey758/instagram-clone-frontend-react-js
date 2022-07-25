import React from 'react'
import './Feed.css';
import '../../App.css';
import FeedCard from './FeedCard';
import Footer from '../Footer/Footer';

function FeedPage() {
  return (
    <div className='feed-page'>
      <div className="header">
        <img src="/images/instagram.png" alt="" className="home-logo" />
      </div>
      <div className="feed-wrapper">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default FeedPage
