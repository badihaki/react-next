import ICharacter from "@/lib/interfaces/ICharacter";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState:ICharacter[] = [];

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacters:(state:ICharacter[], action:PayloadAction<ICharacter[]>)=>{
            return state = action.payload;
        },
        addReserveCharacter: (state:ICharacter[], action:PayloadAction<ICharacter>)=>{
            state.push(action.payload);
            return state;
        },
        removeReserveCharacter: (state:ICharacter[], action:PayloadAction<number>)=>{
            state.splice(action.payload, 1);
            return state;
        }
    }
})

export const { setCharacters, addReserveCharacter, removeReserveCharacter } = charactersSlice.actions;
export const selectCharacter = (state:RootState) => state.characters;
export default charactersSlice.reducer;
