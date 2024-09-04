'use client';

import UserPartyList from "@/lib/components/party-components/userPartyList";
import RouteGuard from "@/lib/components/routeGuard";
import { useAppSelector } from "@/lib/redux/hooks";

export default function PartyList(){
    const user = useAppSelector(state=>state.user);

    return(
        <div>
            {
                user.email === "" ?
                <RouteGuard />
                :
                <UserPartyList />
            }
        </div>
    )
}