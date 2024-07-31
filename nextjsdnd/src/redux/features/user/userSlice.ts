import { RootState } from "@/redux/store";
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
        setUser: (state, action:PayloadAction<UserState>)=>{        
            state.email = action.payload.email,
            state.password = action.payload.password
        }
    }
})

export const { setUser } = userSlice.actions;

export const selectUser = (state:RootState) => state.user.value;

export default userSlice.reducer;