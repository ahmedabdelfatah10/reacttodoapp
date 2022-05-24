import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CreateGoal from '../components/CreateGoal'
import goalMethods from "../redux/action/GoalActions";


export const Dashboard = () => {

  const {user}= useSelector(state=>state.auth)
 
  const goals=useSelector(state=>state.goals.goals1)
  const dispatch=useDispatch()


  const navigate=useNavigate();
 

  useEffect(()=>{
      if(!user){
        navigate('/login')
      }   else{
        dispatch(goalMethods.getGoals(user))
      }

  
  },[user,navigate,dispatch])

  return (
    <>
  <CreateGoal/>
  <div className='container'>
         <div className='row'>
       {goals ? goals.map((goal)=>{
         return( <div key={goal._id} className="d-flex justify-content-between mb-3 mt-3">
           <span>{goal.text}</span>
           <button className="btn-danger" onClick={()=>dispatch(goalMethods.deletegoal(goal._id,user))}>delete</button> 
       </div>)
       }):null} 
    </div>
    </div>
    </>

  )
}
