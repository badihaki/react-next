import React, { useEffect } from 'react'
import CharacterList from './characterList'
import CharacterInfoContainer from './characterInfoContainer'
import PartyContainer from './partyContainer'
import axios from 'axios'
import { useAppSelector } from '@/lib/redux/hooks'

function UserPartyList() {
  const user = useAppSelector(state=>state.user);

  async function getCharacters() {
    try{
      const response = await axios.get("api/characters/get",{data:{uid:user._id}}).then(r=>r.data);
      console.log(response);
    }
    catch(err:any){
      console.log(err.response.data)
    }
  }

  useEffect(()=>{
    getCharacters();
  },[])
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
