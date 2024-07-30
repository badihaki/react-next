"use client"
import NavigationBar from "@/components/NavBar";
import SignUp from "@/components/SignUp";
import NavBarProps from "@/interfaces/INavBarProps";

export default function Authorization(){
    const navigation: NavBarProps[] = [
        {
            title:"Front Page",
            url:"/"
        },
        {
            title:"Party List",
            url:"/party"
        },
        {
            title: "New Character",
            url: "/newcharacter"
          }
    ];
    return(
        <div>
            <h3>Log in or Sign Up Below</h3>
            <br />
            <SignUp />
            <br />
            <NavigationBar links={navigation} />
        </div>
    )
}