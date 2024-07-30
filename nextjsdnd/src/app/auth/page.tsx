"use client"
import LogIn from "@/components/LogIn";
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
            <h2>Log in or Sign Up Below</h2>
            <br />
            <SignUp />
            <br />
            <h3>or...</h3>
            <br />
            <LogIn />
            <br />
            <NavigationBar links={navigation} />
        </div>
    )
}