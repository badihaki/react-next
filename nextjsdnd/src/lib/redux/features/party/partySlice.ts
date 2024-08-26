import ICharacter from "@/lib/interfaces/ICharacter";
import IParty from "@/lib/interfaces/IParty";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/redux/store";

const initialState:IParty = {
    characters:[],
    reserve:[]
}

export const partySlice = createSlice({
    name: 'party',
    initialState,
    reducers:{
        addCharacterToParty: (state:IParty, action:PayloadAction<ICharacter>)=>{
            state.characters.push(action.payload);
            return state;
        },
        removeCharacterFromParty: (state:IParty, action:PayloadAction<number>)=>{
            state.characters.splice(action.payload, 1);
            return state;
        },
        addReserveCharacter: (state:IParty, action:PayloadAction<ICharacter>)=>{
            state.reserve.push(action.payload);
        },
        removeReserveCharacter: (state:IParty, action:PayloadAction<number>)=>{
            state.reserve.splice(action.payload, 1);
        }
    }
})

export const { addCharacterToParty, removeCharacterFromParty, addReserveCharacter, removeReserveCharacter } = partySlice.actions;

export const selectParty = (state:RootState) => state.party;

export default partySlice.reducer;