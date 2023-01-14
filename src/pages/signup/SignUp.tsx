import React, { useEffect, useState } from 'react'
import image from '../../photos/uni_logo.png';
import './Signup.css'

function SignUp() {
  const [fname,setFname]=useState<any>();
  const [lname,setLname]=useState<any>();
  const [email,setEmail]=useState<any>();
  const [password,setPassword]=useState<any>();
  const [cpassword,setCpassword]=useState<any>();

  const newUser={
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    cpassword: cpassword

  }

  // const [shpw,setshpw]=useState<boolean>(true);

  useEffect(() => {
    console.log(cpassword);  
  },[lname,fname,email,password,cpassword]);

  // const handleClick=()=>{
  //   // alert();
  //   if(shpw){
  //     setshpw(false);
  //   }
  //   else{
  //     setshpw(true);
  //   }
  // }

  return (
    <div>
        <form action="" method='' className='sign'>
        <img className='logo' src={image} alt="univetsity logo" />
        <h2 className='header'>SIGN UP</h2>
            <div className='input-section'>
              <label className='input-label' htmlFor="fname">FIRST NAME</label>
              <input type="text" className='input-text' id='fname' placeholder='First Name' onChange={(e)=>{setFname(e.target.value)}}/>
            </div>
            <div className='input-section'>
              <label className='input-label' htmlFor="lname">LAST NAME</label>
              <input type="text" className='input-text' id='lname' placeholder='Last Name' onChange={(e)=>{setLname(e.target.value)}} />
            </div>
            <div className='input-section'>
              <label className='input-label' htmlFor="email">EMAIL</label>
              <input type="text" className='input-text' id='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='input-section'>
              <label className='input-label' htmlFor="password">PASSWORD</label>
              <input type= "password" className='input-text' id='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
              {/* <p onClick={handleClick}>show pw</p> */}
            </div>
            <div className='input-section'>
              <label className='input-label' htmlFor="cpassword">CONFIRM PASSWORD</label>
              <input type="password" className='input-text' id='cpassword' placeholder='Confirm Password' onChange={(e)=>{setCpassword(e.target.value)}}/>
            </div>
            <button className='submit'>Register</button>    
        </form>
    </div>
  )
}

export default SignUp