const initialState={
    users:[ {id:1,name:"mohamed",email:"medk@gmail.com"},{id:2,name:"kahla",email:"kahla@gmail.com"}]
};
const taskReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADD_USER":
        return{...state,users:[...state.users,action.payload]}
         case"Update_USER":
         
         const user=state.users.find((u)=>u.id===parseInt(action.payload.id))
            if (user){
                user.name=action.payload.name
                user.email=action.payload.email

            }
            return state
            case "DELETE_USER":
                return{...state,users:[...state.users.filter((e)=>e.id!==parseInt(action.payload))]

                }
    
        
            
    }


}
export default taskReducer;