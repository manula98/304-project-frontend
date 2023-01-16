import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./NavBar.css"
import uni_logo from 'photos/uni_logo.png'

function NavBar() {
  return (
   <div>
      <div className='nav-section'>
        <img style={{width:'75px',height:'75px',marginTop:'7px',marginLeft:'15px'}} src={uni_logo} alt="university logo" />
        <div>
          <p className='header-title'>Resource Allocation System</p>
        </div>
        <div>
          <ul className='nav-list'>    
                <li className='nav-icon'><Link to='/'>Home</Link></li>
                <li className='nav-icon'><Link to='/about'>About Us</Link></li>
                <li className='nav-icon'><Link to='/gallery'>Gallery</Link></li>
                <li className='nav-icon'><Link to='/contact'>Contact</Link></li>
                <li className='nav-icon'><Link to='/book'>Book Now</Link></li>
                <li className='nav-icon'><button style={{border:'1px solid black',padding:'3px',paddingLeft:'15px',paddingRight:'15px',marginTop:'-10px'}}><Link to='/login'>LOGIN</Link></button></li>
                <li className='nav-icon' style={{marginTop:'10px'}}><FaSearch /></li>
            </ul>
        </div>
      </div>
      <div className='empty'>

      </div>
   </div>
  )
}

export default NavBar