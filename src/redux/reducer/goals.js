
const intialstate={
  goals1:[]
}


const goalReducer=(state=intialstate,{type,payload})=>{
       switch(type){
         case 'creategoal':
           let g=[...state.goals1]
           g.push(payload)
           return {...state,goals1:g}
          case 'getgoals':
            return {...state,goals1:payload}
            case 'delete':
              let c=[...state.goals1]
             let x= c.filter((h)=> h._id !== payload.id)
              return {...state,goals1:x}
           default:
           return state
       }




       
}

export default goalReducer