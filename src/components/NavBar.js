import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import authmethods from '../redux/action/AuthActions'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
const {user}=useSelector(state=>state.auth)
const dispatch=useDispatch()
const navigate=useNavigate()
const {isSuccess}=useSelector(state=>state.auth)

const onLogout = () => {
  dispatch(authmethods.logout())
  navigate('/login')
}


  return(
    !user?
    <div className='container'>
    <div className='row '>
      <div className='d-flex justify-content-between'>
      <h1 className='mb-5'>Dashboard </h1>
      <div  className='mb-5'>
     
     <Link to="/login">
     <button className='btn btn-secondery'>sign In</button>
       </Link> 
       <Link to="/register">
      <button className='btn btn-secondery'>register</button>
      </Link>
       </div>
  </div>
     </div>
    </div>

:     <div className='container'>
<div className='row '>
  <div className='d-flex justify-content-between'>
  <h1 className='mb-5'>Dashboard </h1>
  <div  className='mb-5'>
  
    <button className='btn btn-secondery' onClick={onLogout}>
      sign out
    </button>

    </div>
  
  </div>

  </div>
 </div>)


 
}
export default NavBar
