import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */
import "./NavBar.css"

function NavBar() {
  return (
   <div>
        <div className='nav-section'>
            <ul className='nav-list'>    
                <li className='nav-icon'><Link to='/'>Home</Link></li>
                <li className='nav-icon'><Link to='/about'>About Us</Link></li>
                <li className='nav-icon'><Link to='/gallery'>Gallery</Link></li>
                <li className='nav-icon'><Link to='/contact'>Contact</Link></li>
            </ul>

        </div>
        <div className='empty'>

        </div>
   </div>
  )
}

export default NavBar