import axios from 'axios'





const createGoal=(data,token)=>async (dispatch)=>{

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const res=await  axios.post('https://todos-application1.herokuapp.com/api/goals',data,config)

  dispatch({
    type:'creategoal',
    payload:res.data
  });
}


const getGoals=(user)=>async (dispatch)=>{
  let token;
  if(user){
     token=user.token
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const res=await  axios.get('https://todos-application1.herokuapp.com/api/goals',config)

  dispatch({
    type:'getgoals',
    payload:res.data
  })
}

const deletegoal=(id,user)=>async(dispatch)=>{
  let token;
  if(user){
     token=user.token
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const res=await  axios.delete(`https://todos-application1.herokuapp.com/api/goals/${id}`,config)
  
  console.log(res.data)
  
  dispatch({
    type:'delete',
    payload:res.data
  })
}



const goalMethods={
  createGoal,
  getGoals,
  deletegoal
}
export default goalMethods