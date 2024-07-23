interface CharacterProps{
    character:{
        name:string,
        class:string
    }
}

export function CharacterCard(props:CharacterProps){
    return(
        <div>
            <h3>{props.character.name}</h3>
            <h5>{props.character.class}</h5>
        </div>
    )
}