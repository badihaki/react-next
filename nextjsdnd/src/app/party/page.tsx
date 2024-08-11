'use client';

import NavigationBar from "@/components/NavBar"
import NavBarProps from "@/interfaces/INavBarProps"

export default function PartyList(){
    const navigation: NavBarProps[] = [
        {
          title: "Front Page",
          url: "/"
        },
        {
          title: "New Character",
          url: "/newcharacter"
        }
      ];

    return(
        <div>
            <h2>Party List</h2>
            <br />
            <NavigationBar links={navigation} />
        </div>
    )
}