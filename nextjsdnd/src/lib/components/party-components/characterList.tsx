import ICharacter from '@/lib/interfaces/ICharacter'
import React, { Dispatch, SetStateAction } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList(props:{ characters:ICharacter[], selectCharacter:(character:ICharacter)=>void }) {
  const cards = props.characters.map(character => <CharacterCard key={character._id} character={character} openCharacter={props.selectCharacter} />)

  return (
    <div>
      <div className='font-bold font-serif mx-auto text-center mt-6 text-2xl'>
        Character List
      </div>
      <div className='relative overflow-auto max-h-60'>
        {cards}
      </div>
    </div>
  )
}

export default CharacterList
