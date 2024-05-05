import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";




const userSlice = createSlice({
    name:'users',
    initialState: userList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
            console.log(state.users)
            
        },
        deleteUser:(state,action)=>{
            const {id } = action.payload;
            const uu = state.find(f=> f.id == id)
            if(uu){
                return state.filter(f=> f.id !== id)

            }
        },
        updateUser:(state,action)=>{
            const {id,name,email} = action.payload;
            const updatingUser = state.find(user => user.id == id);
            if(updatingUser){
                updatingUser.name =name;
                updatingUser.email=email
            }
        }
        }
})

export const {addUser,updateUser, deleteUser} = userSlice.actions
export const userReducer = userSlice.reducer
export default userSlice.reducer