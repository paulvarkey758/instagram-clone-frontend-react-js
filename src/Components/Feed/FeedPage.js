import React from 'react'
import './Feed.css';
import '../../App.css';
import FeedCard from './FeedCard';
import Footer from '../Footer/Footer';
import {useEffect,useState,useContext} from 'react'
import axios from 'axios';
import {userContext} from '../Context';

function FeedPage() {
  const user=useContext(userContext) 
  const [posts,setPosts]=useState([])
  console.log(posts)
  useEffect(()=>{
    axios.get('http://localhost:8000/api/fetch-feed/').then((resp)=>{
      setPosts(resp.data)
    })
  },[])
  return (
    <div className='feed-page'>
      <div className="header">
        <img src="/images/instagram.png" alt="" className="home-logo" />
      </div>
      <div className="feed-wrapper">
        {
          posts.map((obj,index)=>{
            return(
              <FeedCard object={obj}/>
              
            )
          })
        }
        
      </div>
      <Footer/>
    </div>
  )
}

export default FeedPage
