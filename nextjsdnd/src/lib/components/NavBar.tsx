"use client"

import Link from "next/link";
import { useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";

export default function NavigationBar(){
    // console.log(links.links);
    const user = useAppSelector((state:RootState)=>state.user);

    return(
        <ul id="navbar" className="flex my-8 justify-center bg-stone-700 sticky top-2">
            <li className="border-4 border-slate-50 rounded-md mx-2 px-1 py-2"> 
                <Link href={"/"}>Home</Link>
            </li>
            <li className="border-4 border-slate-50 rounded-md mx-1 px-1 py-2">
                <Link href={"/party"}>Party</Link>
            </li>
            <li className="border-4 border-slate-50 rounded-md mx-2 px-1 py-2">
                <Link href={"/newcharacter"}>Create Character</Link>
            </li>
            <li className="border-4 border-slate-50 rounded-md mx-2 px-1 py-2">
                {user.email === ""? <Link href={"/auth"}>Join Us</Link> : <Link href={"/auth"}>Log Out</Link>}
            </li>
        </ul>
    )
}