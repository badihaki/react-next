import ICharacter from "@/interfaces/ICharacter";
import IParty from "@/interfaces/IParty";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/redux/store";

const initialState:IParty = {
    characters:[]
}

export const partySlice = createSlice({
    name: 'party',
    initialState,
    reducers:{
        addCharacter: (state:IParty, action:PayloadAction<ICharacter>)=>{
            state.characters.push(action.payload);
            return state;
        },
        removeCharacter: (state:IParty, action:PayloadAction<number>)=>{
            state.characters.splice(action.payload, 1);
            return state;
        }
    }
})

export const { addCharacter, removeCharacter } = partySlice.actions;

export const selectParty = (state:RootState) => state.party;

export default partySlice.reducer;