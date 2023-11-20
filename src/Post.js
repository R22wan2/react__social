import React from 'react'
import { Link } from 'react-router-dom'
//import { useParams } from 'react-router-dom'
import  {useContext} from 'react'
import { DataContext } from './DataProvider'

const Post = ({comment}) => {
const {myname}=useContext(DataContext)
  return (
    <div className='Boxs' style={{"text-align":"center"}}>
   
  <div className='title_of'><Link to={`postP/${comment.id}`}  className='title_tdl'><h1 className='box_title' >Title : {comment.title}</h1></Link></div>
      
      <p>Date : {comment.datetime}</p>
      <h4>Work : {
      
      (comment.body).length>=25?`${(comment.body).slice(0,25)}...`:
      `${comment.body}`
      
      } {myname}</h4>
    </div>
  )
  
}

export default Post
