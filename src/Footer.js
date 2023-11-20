import React, {useContext} from 'react'
import { DataContext } from './DataProvider'


const Footer = () => { 
const {myname}=useContext(DataContext)
  return (
    <div className='footer'>
   <h1>goood bye {myname}</h1>
    </div>
  )
}

export default Footer
