import { useState } from "react"
import { CharacterCard } from "./CharacterCard"

export function PartyList(){
    const [party, setParty] = useState<{name:string, class:string}[]>([])
   
    const partyMembers = ()=>{
        if(party.length > 0){
            return party.map( (character:{name:string, class:string}) => {
                return <CharacterCard character={character} />
            })
        }
        else{
            return(
                <>
                    No characters yet
                </>
            )
        }
    }

    return(
        <div id="party">
            {partyMembers()}
        </div>
    )
}