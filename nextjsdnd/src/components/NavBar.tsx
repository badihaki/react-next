import NavBarProps from "@/interfaces/INavBarProps";
import Link from "next/link";
import { useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";

export default function NavigationBar({links}: {links:NavBarProps[]}){
    // console.log(links.links);
    const user = useAppSelector((state:RootState)=>state.user);

    const navLinks = links.map( (link: {
        title: string,
        url: string
    }) => <div key={link.title+link.url}>
        <Link href={link.url}>
            {link.title}
        </Link>
    </div>)

    return(
        <div id="navbar">
            {navLinks}
            {user.email === ""? <Link href={"/auth"}>Join Us</Link> : <Link href={"/auth"}>User</Link>}
        </div>
    )
}