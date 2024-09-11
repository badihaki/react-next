import ICharacter from '@/lib/interfaces/ICharacter'
import React from 'react'
import CharacterCard from './CharacterCard'

function CharacterList(props:{characters:ICharacter[]}) {
  const cards = props.characters.map(character => <CharacterCard key={character._id} character={character} />)

  return (
    <div>
      Character List
      <br />
      {cards}
    </div>
  )
}

export default CharacterList
