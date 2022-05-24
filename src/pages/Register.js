
import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import authmethods from '../redux/action/AuthActions'
 const Register = () => {
   const[formData,setformData]=useState({name:'',email:'',password:'',password2:''})
   const [message,setMessage]=useState('')
   const {isSuccess}=useSelector(state=>state.auth)
   const navigate=useNavigate();

   const {name,email,password,password2}=formData;

   const dispatch=useDispatch();
  const handelChange=(e)=>{
       setformData((form)=>({...form,[e.target.name]:e.target.value}))
   }
   useEffect(()=>{

    if(isSuccess){
      navigate('/')
    }
  },[isSuccess,navigate])

   const handleSubmit=(e)=>{
     e.preventDefault();
     if(password !==password2){
       setMessage('password must match')
     }else{
       setMessage('')
       const userData={
         name,
         email,
         password
       }
       dispatch(authmethods.register(userData))
     }
   }

  return (
    <>
   <div className='container'>
     <div className='row'>
       <h1 className='col-6 m-auto mb-5'>Register</h1>

     </div>
   </div>

    <div className='container'>
       <div className='row'>
         <form onSubmit={handleSubmit}>

        
      <div className='col-6 m-auto'>
      <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control"  placeholder="Enter Your Name"name='name' value={name} onChange={handelChange}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  name='email'
     placeholder="Enter Your email"
     value={email} onChange={handelChange}/>
  </div>
  <div className="mb-3">
    <label className="form-label">password</label>
    <input type="password" className="form-control" name='password' placeholder="Enter your password"
    value={password} onChange={handelChange}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Rebeat password</label>
    <input type="password" className="form-control"name='password2' placeholder="confirm password"
    value={password2} onChange={handelChange}/>
  </div>
   
  <div className="mb-3">
   <span className='text-danger'>{message}</span>
  </div>

  <div className="m-auto">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
      </div>
      </form>
       </div>

    </div>
  
    </>

  )
}

export default Register