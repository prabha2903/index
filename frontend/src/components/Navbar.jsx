import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
   <div className='Link'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/Services'>Services</Link>
    <Link to='/contact'>Contact</Link>
    </div>
    </nav>
  )
}

export default Navbar