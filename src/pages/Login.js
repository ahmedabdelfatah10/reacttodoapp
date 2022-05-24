import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authmethods from '../redux/action/AuthActions'
const Login = () => {
  const [formData, setformData] = useState({ email: '', password: '' });
  const {isSuccess}=useSelector(state=>state.auth)
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const { email, password } = formData;
  const handelChange = (e) => {
    setformData((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    }

    dispatch(authmethods.login(userData))

  
    
    
  };

  useEffect(()=>{

    if(isSuccess){
      navigate('/')
    }
  },[isSuccess,navigate])

  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 className='col-6 m-auto mb-5'>login</h1>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
        <div className='col-6 m-auto'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'

                name='email'
                placeholder='Enter Your email'
                value={email}
                onChange={handelChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                password
              </label>
              <input
                type='password'
                className='form-control'

                name='password'
                placeholder='Enter your password'
                value={password}
                onChange={handelChange}
              />
            </div>
            <div className='m-auto'>
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
