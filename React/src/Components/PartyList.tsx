import { useContext } from "react"
import { CharacterCard } from "./CharacterCard"
import { PartyContext } from "./Context/PartyContext"

export function PartyList(){
   const { party } = useContext(PartyContext);

    const partyMembers = ()=>{
        if(party.length > 0){
            return party.map( (character:{name:string, class:string}) => {
                return <CharacterCard character={character} key={character.name+character.class} />
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