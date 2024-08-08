import { configureStore, GetState } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { partySlice } from "./features/party/partySlice";

export const makeStore = () => configureStore({
    reducer: {
        user:userSlice,
        party:partySlice
    }
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];