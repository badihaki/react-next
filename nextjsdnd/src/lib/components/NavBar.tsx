"use client"

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";
import { removeUser } from "../redux/features/user/userSlice";
import axios from "axios";

export default function NavigationBar(){
    const dispatch = useAppDispatch();
    const user = useAppSelector((state:RootState)=>state.user);

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
            <li className="border-4 border-slate-50 rounded-md mx-2 px-1 py-2 hover:bg-stone-400 hover:text-black font-semibold transition duration-500 ease-in-out"> 
                <Link href={"/"}>Home</Link>
            </li>
            <li className="border-4 border-slate-50 rounded-md mx-1 px-1 py-2 hover:bg-stone-400 hover:text-black font-semibold transition duration-500 ease-in-out">
                <Link href={"/party"}>Party</Link>
            </li>
            <li className="border-4 border-slate-50 rounded-md mx-2 px-1 py-2 hover:bg-stone-400 hover:text-black font-semibold transition duration-500 ease-in-out">
                <Link href={"/newcharacter"}>Create Character</Link>
            </li>
            <li className="transition duration-500 ease-in-out border-4 bg-slate-700 border-stone-400 rounded-md mx-2 px-1 py-2 text-stone-200 font-semibold hover:bg-stone-400 hover:text-slate-800">
                {user.email === ""? <Link href={"/auth"}>Join Us</Link> : <button onClick={handleLogOut}>Log Out</button>}
            </li>
        </ul>
    )
}