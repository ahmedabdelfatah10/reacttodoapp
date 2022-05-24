import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import authmethods from "../redux/action/AuthActions";




const RenderGoals=()=>{

  const goals=useSelector(state=>state.goals.goals)


  const dispatch=useDispatch()

  useEffect(()=>{
  
   
  },[dispatch,token,goals])

  


  return(
     <div className='container'>
        <div className='row'>
       {/* {goals ? goals.map((goal)=>{
         return( <div key={goal._id}>
           <span>{goal.text}</span>
           <input type="button" value="delete"/>
           <button className="btn-danger">delete</button> 
       </div>)
       }):null} */}
    </div>
    </div>
  )



}

export default RenderGoals