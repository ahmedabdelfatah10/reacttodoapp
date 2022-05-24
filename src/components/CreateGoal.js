import React, { useState } from 'react'
import goalMethods from '../redux/action/GoalActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
 const CreateGoal = () => {

  const [text,setText]=useState('')
  const dispatch=useDispatch();
  const {user}=useSelector(state=>state.auth)


  const handelChange = (e) => {
   setText(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const goals={
      text
    }

 
    dispatch(goalMethods.createGoal(goals,user.token))

    
    
  };
  return (
    <div className='container'>
        <div className='row'>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
           Enter New goal
              </label>
              <input
                type='text'
                className='form-control'

                name='text'
                placeholder='Enter Your email'
                value={text}
                onChange={handelChange}
              />
            </div>
            <div className='m-auto'>
              <button className='btn btn-primary' type='submit'>
                Add one
              </button>
            </div>
            </form>
        </div>
      </div>

  )
}

export default CreateGoal