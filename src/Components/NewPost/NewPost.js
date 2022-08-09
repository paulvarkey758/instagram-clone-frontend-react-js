import React from 'react'
import '../../App.css';
import './NewPost.css';
import {useState,useContext} from 'react'
import {userContext} from '../Context';
import axios from 'axios';

function NewPost() {
    const [post,setPost]=useState({});
    const user=useContext(userContext)
    const handlePost=(e)=>{
        e.preventDefault();
        console.log(post.picture)
        if(post.picture===undefined){
            document.getElementById("postErrMsg").style.display="block";
        }
        else{
            let formData=new FormData()
            formData.append('location',post.location)
            formData.append('post',post.picture,post.picture.name)
            formData.append('caption',post.caption)
            console.log(formData)
            axios.post(`http://localhost:8000/api/add-post/${user.token}/`,formData).then((resp)=>{
                console.log(resp.data)
                window.location="/"
            }).catch((err)=>{
                console.log("error while posting")
            })
        }
        
    }

    const handleCancel=(e)=>{
        e.preventDefault()
        window.location="/"
    }
  return (
    <div>
      <div className="add-container">
        <form action="">
            <input type="file" name="inputFile" id="inputFile" onChange={(e)=>setPost({"picture":e.target.files[0]})} />
            <label htmlFor="inputFile"><div className="post-div"><img src={post.picture?URL.createObjectURL(post.picture):"/images/upload-image.png"} /></div></label>
            <input type="text" name="location" id="" placeholder='Location' onChange={(e)=>setPost({...post,"location":e.target.value})} value={post.location} />
            <input type="text" name="caption" placeholder="Caption" onChange={(e)=>setPost({...post,"caption":e.target.value})} value={post.caption} />
            <div className="post-error-msg" id='postErrMsg'>upload a picture before posting</div>
            <div className="btn-container">
                <button onClick={(e)=>handleCancel(e)}>Cancel</button>
                <button onClick={(e)=>handlePost(e)}>Post</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default NewPost
