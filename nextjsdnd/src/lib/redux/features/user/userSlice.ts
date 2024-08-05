import { RootState } from "@/lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    email:"",
    password:""
}
const initialState:UserState = {
    email:"",
    password:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
            setUser: (state:UserState, action:PayloadAction<UserState>)=>{
            state.email = action.payload.email,
            state.password = action.payload.password
            return state;
        }
    }
})

export const { setUser } = userSlice.actions;

export const selectUser = (state:RootState) => state.user;

export default userSlice.reducer;