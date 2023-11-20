import React from 'react'
import "./forms.css"
const Newpost = ({handle,newpost,changenewpost,newcom,changenewcom}) => {
  return (
    <div className='form_div_1'>
      
       
      <label style={{"position":"absolute","left":"-787877878px"}} htmlFor='hh'>been</label>
  <form onSubmit={handle} className='forms'  autocomplete="off" >
     <h1 style={{"text-align":"center"}}>ADD List</h1>
    <input  type="text" placeholder='TITLE' id="hh" value={newpost} required onChange={(e)=>{changenewpost(e.target.value)}} /><br/>
<textarea placeholder='comment' value={newcom} 
onChange={(e)=>{changenewcom(e.target.value)}} required
/><br/>
<button type="submit" className='f_btn'>button</button>
  </form></div>
 
  )
}

export default Newpost
