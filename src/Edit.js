import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Edit = ({comment,edit_title,change_title,edit_comment,change_comment,update_edit}) => {
    const {id}=useParams()
    const filters=comment.filter((com)=>{
return(
    (com.id).toString()===id
)

    })
  

    useEffect(()=>{
      change_title(filters[0].title)
      change_comment(filters[0].body)
    },[change_title,change_comment])

    

  return (
    <div className='form_div_1'>
      
       
      <form  className='forms' onSubmit={(e)=>{e.preventDefault()}}  autocomplete="off" >
     <h1 style={{"text-align":"center"}}>Edit List</h1>
    <input  type="text" placeholder='TITLE' id="hh" value={edit_title} required onChange={(e)=>{change_title(e.target.value)}} /><br/>
<textarea placeholder='comment' value={edit_comment} 
onChange={(e)=>{change_comment(e.target.value)}} required
/><br/>
<button type="submit" onClick={()=>update_edit(filters[0].id)} className='f_btn'>button</button>
  </form></div>
  )
}

export default Edit
