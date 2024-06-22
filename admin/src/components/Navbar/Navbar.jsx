import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <div className='title'>
          <p >Admin Panel</p>
        </div>
      
    </div>
  )
}

export default Navbar
