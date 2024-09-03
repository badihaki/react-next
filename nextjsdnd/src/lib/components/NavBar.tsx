"use client"

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";
import { removeUser, setUser } from "../redux/features/user/userSlice";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

export default function NavigationBar(){
    const dispatch = useAppDispatch();
    const user = useAppSelector((state:RootState)=>state.user);
    
    const getUserDetails = async()=>{
        const response:AxiosResponse = await axios.get('/api/users/me');
        // console.log(response.data.userData);
        dispatch(setUser(response.data.userData));
    }

    useEffect(()=>{
        getUserDetails();
    })

    const handleLogOut = async ()=> {
        console.log("logging out");
        try{
            await axios.get("api/users/logout");
            dispatch(removeUser());
        }
        catch(err:any){
            console.log(err);
        }
    }

    return(
        <ul id="navbar" className="flex my-8 mx-28 justify-center bg-stone-700 sticky top-2 rounded-full p-4 content-center space-x-10">
            <Link href={"/"}>
                <li className="border-4 border-slate-50 rounded-md mx-2 px-1 py-2 hover:bg-stone-400 hover:text-black font-semibold transition duration-500 ease-in-out"> 
                    Home
                </li>
            </Link>
            <Link href={"/party"}>
                <li className="border-4 border-slate-50 rounded-md mx-1 px-1 py-2 hover:bg-stone-400 hover:text-black font-semibold transition duration-500 ease-in-out">
                    Party and Characters
                </li>
            </Link>
            <Link href={"/newcharacter"}>
                <li className="border-4 border-slate-50 rounded-md mx-2 px-1 py-2 hover:bg-stone-400 hover:text-black font-semibold transition duration-500 ease-in-out">
                    Create Character
                </li>
            </Link>
            <Link href={"/profile"}>
                <li className={user.email === "" ? "" : "border-4 border-slate-50 rounded-md mx-2 px-1 py-2 hover:bg-stone-400 hover:text-black font-semibold transition duration-500 ease-in-out"}>
                    {user.email === ""? "" : "User Profile" }
                </li>
            </Link>
            <li className="transition duration-500 ease-in-out border-4 bg-slate-700 border-stone-400 rounded-md mx-2 px-1 py-2 text-stone-200 font-semibold hover:bg-stone-400 hover:text-slate-800">
                {user.email === ""? <Link href={"/auth"} className="h-full w-full">Join Us</Link> : <button className="h-full w-full    " onClick={handleLogOut}>Log Out</button>}
            </li>
        </ul>
    )
}