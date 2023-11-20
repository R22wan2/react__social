import React, { useContext } from 'react'
import { DataContext } from './DataProvider'

import { Link } from 'react-router-dom'
const Nav = ({search,searchc}) => {
  const {refs}= useContext(DataContext)
  return (
    <div className='searchs'>   <div className='f_dis'>
      <div className='f_div'>
     <form   onSubmit={(e)=>e.preventDefault}>

    <input placeholder='enter name' id="j"
    value={search}
    ref={refs}
    onChange={(e)=>{searchc(e.target.value)}}
    />
   
   </form></div>
   
   <div className='s_div'>
<ul className='li_1'>
  <li>
    <Link className='lio' to='/'>Home</Link>
  </li>
  <li><Link className='lio' to='/post'>Post</Link></li>
  <li><Link className='lio' to='/support'>Support</Link></li>
</ul></div>


</div>
    </div>
  )
}

export default Nav
