import About from "./About";
import Footer from "./Footer";
import React from "react";
import {Routes,Route, useNavigate} from 'react-router-dom'
import Header from "./Header";
import Nav from "./Nav";
import "./app.css"
import PostPage from "./PostPage";
//import Post from "./Post";
import Home from "./Home";
import Missing from "./Missing";
import NewPost from "./Newpost";
//import PostLayout from "./PostLayout";
import { useState } from "react";
import { useEffect } from "react";
import{format} from'date-fns'
import axios from "axios";
import Edit from "./Edit";
import{DataContext} from './DataProvider'
import { useRef } from "react";
//import { Router } from "react-router-dom";
function App() {
const refs=useRef()
  const [newpost,changenewpost]=useState('')
  const [search,searchc]=useState('')
  const [newcom,changenewcom]=useState('')
  const usen=useNavigate()
  const [comment,changeComment]=useState([
  ])
  const [edit_title,change_title]=useState('')
  const [edit_comment,change_comment]=useState('')
  const URL_S='http://localhost:3500/dat'
const myname='riswan'

  const update_edit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: edit_title, datetime, body: edit_comment };
    const send = `${URL_S}/${id}`;
  
    try {
     await axios.put(send,newPost);


      // Update state using the callback form of setState
      const respon=await axios.get(URL_S)
changeComment(respon.data)
     
  
      // Clear input fields
      change_title('');
      change_comment('');
  
      // Assuming usen is a function to navigate to a different route
      usen('/');
    } catch (error) {
      console.error('Error updating post:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };






  const handle= async (e)=>{
  
      e.preventDefault();
      const id = comment.length?comment[comment.length-1].id + 1 : 1;
      const datetime = format(new Date(), 'MMMM dd, yyyy pp')
      const newPost = { id,title: newpost ,datetime:datetime,
      body:newcom }
      const allcomment = [...comment,newPost]
     await axios.post(URL_S,newPost)
     
      changeComment(allcomment);
      changenewpost('')
      changenewcom('')
      usen('/')
    }
const dele= async (ids)=>{
console.log(ids,"fuck")


const gg=comment.filter((comment)=>{
  return((comment.id).toString()!==ids)
 
})
const UP=comment.filter((comment)=>{
  return((comment.id).toString()===ids)
 
})
const send=`${URL_S}/${UP[0].id}`
await axios.delete(send)

 changeComment(gg)
 usen('/')
}


useEffect(()=>{
const fetches = async ()=>{

const respon=await axios.get(URL_S)
changeComment(respon.data)
}

fetches()

},[])
  const subs=(a,b)=>{
    
    const bd=a.filter((a)=>{

      return((a.id).toString()===b) 
    }
  
  
    )  
     console.log(bd)
    return bd[0]
    
  }
return ( 
  <DataContext.Provider value={{myname,refs}} >
<div className="apps">
  <div>
  
    <Header />
<Nav
search={search}
searchc={searchc}

/>
  </div> 

  <Routes>

  <Route path='/'  element={ 
  <Home comment={
    comment.filter(
      (com)=>(
        
        (com.title).toLowerCase().includes(search.toLowerCase())||(com.title).toLowerCase().includes(search.toLowerCase())
      
      
      )
    
    
    ).reverse()
  
  } 
   changeComment={changeComment}/>}/>
 

<Route path="/post" element={<NewPost
handle={handle}
newpost={newpost} 
changenewpost={changenewpost}
newcom={newcom}
changenewcom={changenewcom} />} />
  <Route  path="/postP"  element={<PostPage  />} />



<Route path="postP/:id"  element={<PostPage comment={comment}  subs={subs} dele={dele}/>} />
<Route path="postP/:id/radio/:id" element={<Edit comment={comment} edit_title={edit_title} change_title={change_title} edit_comment={edit_comment} change_comment={change_comment}
update_edit={update_edit}/>}/>
<Route path="/support" element={<About />} />
<Route path="*" element={<Missing/>} />
 

  </Routes>

 
<Footer />

</div>
</DataContext.Provider>
);
}
export default App;
