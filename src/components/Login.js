import React from 'react'
import './login.css';
import img from '../images/cloud.jpg';
const Login = () => {
  return (
    <>
      <div className='container'>
        <div className="first_div">
           <img src={img} className='img'/>
        </div>
         <div className='second_div'>
         <h3 style={{textAlign:"center"}}>Login</h3>
            <button type="button" className="btn btn-primary">Login With Facebook</button>
            <button type="button" className="btn btn-danger">Login With Google</button>

            <input type="email" placeholder='Email' className='text'/>
            <input type="password" placeholder='Password' className='text' />
            <a href="abc.com" className='link'>
             <p className="forgot-password">forgot password?</p>
            </a> 
            <button type="button" className="btn btn-danger">Login</button>
            <div className='or'>
            <div style={{width:"9rem"}}><hr /></div>
            <div style={{paddingLeft:'1rem',paddingRight:"1rem"}}><p>OR</p></div>
            <div style={{width:"10rem"}}><hr /></div>
            </div>
            <button type="button" className="btn reg ">Register</button>

         </div>

      </div>

    </>
  )
}

export default Login;
