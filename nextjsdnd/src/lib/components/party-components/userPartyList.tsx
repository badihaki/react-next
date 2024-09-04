import React from 'react'
import CharacterList from './characterList'
import CharacterInfoContainer from './characterInfoContainer'
import PartyContainer from './partyContainer'

function UserPartyList() {
  return (
    <div>
      <div className="text-center bg-white text-black w-fit rounded-full p-4 font-semibold">
      Manage your characters and party below
      </div>
      <br />

      <div className="grid grid-rows-2 gap-7 ml-10  mr-10">
          <div className="w-full bg-slate-400 bg-opacity-40 text-left row-span-12">
              <CharacterList />
          </div>

          <div className="bg-slate-400 bg-opacity-40 row-span-12 text-right">
              <CharacterInfoContainer />
          </div>

          <br />

          <div className="col-span-2 row-span-12 w-full bg-slate-400 bg-opacity-40 text-center">
              <PartyContainer />
          </div>
      </div>
    </div>
  )
}

export default UserPartyList
