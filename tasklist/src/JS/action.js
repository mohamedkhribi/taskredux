export const addUserAction=(newUser)=>{
    return{
        type:"ADD_USER",
        payload:newUser
    }
}
export const apdateUserAction=(newUSer)=>{
    return{
        type:"APDATE_USER",
        payload:newUSer
    }
}
export const deleteUserAction=(id)=>{
    return{
        type:"DELETE_USER",
        payload:id
    }
}