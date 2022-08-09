import React from 'react'
import './ProfilePage.css';
import {useState,useEffect,useContext} from 'react'
import {userContext} from '../Context'
import axios from 'axios';

function EditProfile() {
    const user=useContext(userContext)
    const [profile,setProfile]=useState({"profilePic":user.profilePic,"name":user.name,"username":user.username,"bio":user.bio})
    const [updatedPic,setUpdatedPic]=useState()
    
  const goBack=(e)=>{
    e.preventDefault();
    console.log("go back")
    window.location="/";
  }

  const formValidator=(field,message)=>{
    field.innerHTML=message;
    field.classList.add("show-error");
    field.nextElementSibling.style.borderColor="red";
  }

  const handleDone=(e)=>{
    e.preventDefault();
    console.log("submit clicked")
    console.log(profile)
    //form validation section
    var count=0;
    var nmField=document.getElementById("nameError");
    var usrnmField=document.getElementById("usernameError");

    if(profile['name'] === ""){
      formValidator(nmField,"This field is required")
      count=count-1;
    }
    
    if(profile['username'] !== ""){
      if(profile['username'].includes(" ")){
        formValidator(usrnmField,"enter user name without spaces")
        count=count-1;
      }
    }
    else{
      formValidator(usrnmField,"This field is required")
      count=count-1;
    }
    console.log(count)
    if(count==0){
      let formData= new FormData()
      formData.append('profilePic',updatedPic,updatedPic.name)
      formData.append('name',profile.name)
      formData.append('username',profile.username)
      formData.append('bio',profile.bio)
      console.log(formData);
      axios.put(`http://localhost:8000/api/update-profile/${user.token}/`,formData).then((resp)=>{
        console.log(resp.data)
        console.log("profile updated succesfully")
      }).catch((err)=>{
        console.log("something went wrong while updating profile")
        //window.location="/profile"
      })
    }


  }
  return (
    <div>
      <div className="pro-edit-container">
        <form action="">
            <input type="file" name="pro-pic" id="proPic" onChange={(e)=>setUpdatedPic(e.target.files[0])} />
            <label htmlFor="proPic"><div className="pro-pic-container"><img src={updatedPic?URL.createObjectURL(updatedPic):`http://localhost:8000${profile.profilePic}`}/></div></label>
            <div id="nameError" className="error-msg"></div>
            <input type="text" name="name" id="" placeholder='Name' value={profile.name} onChange={(e)=>setProfile({"name":e.target.value})}  />
            <div id="usernameError" className="error-msg"></div>
            <input type="text" name="username" id="" placeholder='Username' value={profile.username} onChange={(e)=>setProfile({...profile,"username":e.target.value})} />
            <input type="text" name="bio" id="" placeholder='Bio' value={profile.bio} onChange={(e)=>setProfile({...profile,"bio":e.target.value})} />
            <button className='edit-btns' id='doneBtn' onClick={(e)=>handleDone(e)} >Done</button>
            <button className='edit-btns' id='cancelBtn' onClick={(e)=>goBack(e)} >Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
