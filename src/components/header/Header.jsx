import React from 'react'
import './Header.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>      
        <img className='logo-img' src={logo} alt="Flipkart Logo" ></img>
        <Link to='/' style={{textDecoration:'none', color:'#fff'}}>
          <h1 className='logo'>Flipkart</h1>
        </Link>
      </div>
      <Link to='/logout'>
        <button className='login-btn'>Logout</button>
      </Link>  
      
    </header>
  )
}

export default Header