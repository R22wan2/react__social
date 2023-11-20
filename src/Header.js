import React from 'react'
import './header.css'
const Head = ({title}) => {
  return (
    <div className='header'>
      <div className='control_title'>{title}</div>
    </div>
  )
}
Head.defaultProps={
  title:"To Do List"
}
export default Head
