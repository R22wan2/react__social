import React from 'react'
import { useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
const PostPage = ({comment,subs,dele}) => {

  const {id}=useParams()
const find_the_post=subs(comment,id)
    return (
    <div >
  {find_the_post &&
  <><h1>{find_the_post.body} </h1>
  <button onClick={()=>dele(id)}>clear</button> <Link to={`radio/${id}`}><button>update</button></Link> </>

  }
  {!find_the_post &&
  <>
  <h1>empty</h1></>
  }
    </div>
    )}
export default PostPage