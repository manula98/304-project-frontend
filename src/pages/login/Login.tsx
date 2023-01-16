import React from 'react'
import senate from 'photos/uni_photo.jpg';
import logo from 'photos/uni_logo.png';
import 'pages/login/Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='back-page'>
        <div className='login-data'>
            <img className='logo' src={logo} alt="university logo" />
             <h2 className='title'>LOGIN</h2>
            <div className='login-input'>
                <input type="text" id='username' className='input-area' placeholder='User Name' />
                <input type="password" id='password' className='input-area' placeholder='Password' />
            </div>
            <div>
            <p className='para'>If you not registered please Sign up </p>    
                <div className='button-section'>
                    <button className='btn' id='login-button'>Login</button>
                    <button className='btn' id='signup-button'><Link to='/signup'>Sign Up</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login