import { createContext, useState } from "react";

export const PartyContext = createContext();
export const  PartyContextProvider = ({children}) => {
    const [party, setParty] = useState<{name:string, class:string}[]>([])

    return(
        <PartyContext.Provider value={{ party, setParty }}>
            {children}
        </PartyContext.Provider>
    )
}