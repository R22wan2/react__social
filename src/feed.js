import React from 'react'
import Post from'./Post'
const Feed = ({comment}) => {
  return (
    <>
      {comment.map((comment)=>(
        <Post key={comment.id }  comment={comment} />
       
      ))}
    </>
  )
}

export default Feed
