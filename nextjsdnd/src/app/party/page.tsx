'use client';

import CharacterInfoContainer from "@/lib/components/party-components/characterInfoContainer";
import CharacterList from "@/lib/components/party-components/characterList";
import PartyContainer from "@/lib/components/party-components/partyContainer";

export default function PartyList(){
    return(
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