import NavBarProps from "@/interfaces/INavBarProps";
import Link from "next/link";

export default function NavigationBar({links}: {links:NavBarProps[]}){
    // console.log(links.links);

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
        </div>
    )
}