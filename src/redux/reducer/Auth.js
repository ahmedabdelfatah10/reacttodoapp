
const user = JSON.parse(localStorage.getItem('user'))
const intialState={
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const authReducer=(state=intialState,{type,payload})=>{
        switch(type){
          case 'register':
            return {...state,user:payload}
            case 'login':
              return {...state,user:payload}
              case 'logout':
                return {...state,user:null}
                case 'sucesss':
                  return {...state,isSuccess:true}
                case 'loggingout':
                  return {...state,isSuccess:false}


                
            default:
              return state
        }
}

export default authReducer
