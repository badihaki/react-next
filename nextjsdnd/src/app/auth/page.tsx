"use client"
import LogIn from "@/lib/components/LogIn";
import SignUp from "@/lib/components/SignUp";

export default function Authorization(){
    return(
        <div>
            <h2>Log in or Sign Up Below</h2>
            <br />
            <SignUp />
            <br />
            <h3>or...</h3>
            <br />
            <LogIn />
        </div>
    )
}