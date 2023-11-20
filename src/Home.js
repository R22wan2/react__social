import React from 'react'
import Feed from './feed'

const Home = ({comment}) => {
  return (
    <div className="main_list" style={{"width":"70%"}}> <div className='box_of_post'>
{(comment).length?
 <Feed comment={comment}/>
:
<h1>Empty</h1>
}
    </div></div>
  )
}

export default Home
