import ICharacter from '@/lib/interfaces/ICharacter'
import React from 'react'

function CharacterInfoContainer(props:{ character: ICharacter|null, }) {
  return (
    <div>
      { props.character !== null ?
      props.character?.name +" Info Container" 
      :
      "Character Info Container"
      }
    </div>
  )
}

export default CharacterInfoContainer
