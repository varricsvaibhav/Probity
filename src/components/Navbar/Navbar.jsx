import React from 'react'
import './Navbar.css'
import logo from '../../assets/pics/logo.png'
const Navbar = () => {
  return (
   <nav className='container'>
      <img  src={logo} alt="" className='logo' />
      <ul>
       <li>HOME</li>
       <li>ABOUT US</li>
       <li><button className='btn'>CONTACT</button></li>
       <li>PROFILE</li>

      </ul>
   
   </nav>
  )
}

export default Navbar
