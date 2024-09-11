import ICharacter from '@/lib/interfaces/ICharacter'
import React from 'react'

function CharacterInfoContainer(props:{ character: ICharacter|null, closeInfo:()=>void }) {
  const CharacterInfo = (props:{info:ICharacter, close:()=>void})=>(
    <div className='relative' id={`Character-Info`} aria-label={`Information for ${props.info.name}`}>
      <div id='Main-Character-Info' className='font-serif font-semibold text-lg text-right px-4'>
        <div id='Character-Name'>
          {props.info.name}
        </div>
        <div id='Close-Info' className='cursor-pointer transition-all duration-500 ease-in-out opacity-35 right-1/4 font-semibold text-sm text-rose-100 bg-red-800 hover:opacity-100 active:bg-slate-100 active:text-black rounded-lg px-2 py-1 w-fit h-fit ml-auto' onClick={props.close}>
          close
        </div>
        <div id='Character-Subinfo' aria-label='Character Level and Class'>
          Level {props.info.level} {props.info.charClass}
        </div>
      </div>
      <div id='Character-Supplementary-Info' className='ml-6'>
        <div id={`Character-Notes`} aria-label={`${props.info.name} notes`}
        className='text-left mt-2'>
          <div className='font-sans font-normal text-base bg-slate-900 w-fit relative overflow-auto px-4 py-2 rounded-md'>
            {props.info.notes !== "" ?
            <div>
              Notes:
              <br />
              {props.info.notes}
            </div>
            :
            "No notes."
            }
          </div>
        </div>
      </div>

    </div>
  )
  
  return (
    <div>
      { props.character !== null ?
      <CharacterInfo info={props.character} close={props.closeInfo} />
      :
      <div className='font-serif font-semibold text-lg text-right px-4' >
        No info to see
      </div>
      }
    </div>
  )
}

export default CharacterInfoContainer
