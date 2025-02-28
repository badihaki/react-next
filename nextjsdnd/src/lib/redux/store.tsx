'use client';

import { configureStore, GetState } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import partySlice from "./features/party/partySlice";
import charactersSlice from "./features/characters/charactersSlice";

export const makeStore = () => configureStore({
    reducer: {
        user: userSlice,
        party: partySlice,
        characters: charactersSlice
    }
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;