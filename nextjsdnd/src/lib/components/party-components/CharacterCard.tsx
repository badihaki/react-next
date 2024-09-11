import ICharacter from '@/lib/interfaces/ICharacter'
import React from 'react'

function CharacterCard(props:{ character:ICharacter, openCharacter:(character:ICharacter)=>void }) {
    return (
        <div className='relative text-center' onClick={()=>props.openCharacter(props.character)}>
            <div className='bg-stone-400 active:bg-opacity-55 bg-opacity-35 text-black font-semibold mx-auto my-4 px-4 py-2 rounded-full w-3/4 text-center  transition-all duration-300 ease-in-out hover:border-l-8 hover:border-b-8 border-stone-800 border-spacing-0'>
                <div className='bg-stone-200 bg-opacity-35 mt-2 mx-auto p-4 w-fit rounded-full'>
                    Hello, my name is <span
                    className='text-rose-900 text-lg font-serif font-bold mx-2 bg-cyan-50 px-2 py-1 rounded-full'
                    >{props.character.name}</span>
                </div>
                <div className='bg-stone-200 bg-opacity-35 w-fit mx-auto pb-2 px-2 rounded-t-lg'>
                    and I am a <span className=' text-lg font-bold font-serif'>level</span>-<span
                    className='text-rose-600 text-lg font-bold font-serif'
                    >{props.character.level} {props.character.charClass} </span>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
