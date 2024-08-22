import IUser from "@/lib/interfaces/IUser";
import { RootState } from "@/lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState:IUser = {
    email:"",
    password:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state:IUser, action:PayloadAction<IUser>)=>{
            state.email = action.payload.email,
            state.password = action.payload.password
            return state;
        },
        removeUser: (state:IUser)=>{
            return state = initialState;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state:RootState) => state.user;

export default userSlice.reducer;