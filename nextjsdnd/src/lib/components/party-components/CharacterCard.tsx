import ICharacter from '@/lib/interfaces/ICharacter'
import React from 'react'

function CharacterCard(props:{character:ICharacter}) {
    return (
        <div className='relative text-center'>
            <div className='bg-stone-400 bg-opacity-35 text-black font-semibold mx-auto my-4 px-4 py-2 rounded-full w-3/4 text-center'>
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
                <div className='py-2 px-4 rounded-md my-2 mx-auto w-fit bg-orange-300 bg-opacity-25'>
                    { props.character.notes === "" ? 'No notes' : props.character.notes }
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
