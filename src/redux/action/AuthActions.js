
import axios from 'axios'
const API_URL = '/api/users'



const register=(data)=>async (dispatch)=>{
    const res=await axios.post("https://todos-application1.herokuapp.com/api/users",data)
    if(res.data){
      localStorage.setItem('user',JSON.stringify(res.data))
      dispatch({type:'sucesss'})
    }


   dispatch({
      type:'register',
      payload:res.data
    })
}


const login=(data)=>async (dispatch)=>{

  const res=await axios.post('https://todos-application1.herokuapp.com/api/users/login',data)
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
    dispatch({type:'sucesss'})
  }

 dispatch({
    type:'login',
    payload:res.data
  })

}
const logout = ()=>async (dispatch) => {
  localStorage.removeItem('user')
 dispatch({
    type:'logout'
  })
  dispatch ({
    type:'loggingout'
  })
}

const authmethods={
  register,
  login,
  logout
}



export default authmethods