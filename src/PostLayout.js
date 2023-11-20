import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
   <>
   <h1>PostPage</h1>
    <Link to="/postpage/fuck">Post 1</Link>
    <br></br>
    <Link to="/postpage/2">Post 2</Link>
    <br></br>
    <Link to="/postpage/3"> Post 3</Link>
    <Outlet/>
   </>
  )
}

export default PostLayout
