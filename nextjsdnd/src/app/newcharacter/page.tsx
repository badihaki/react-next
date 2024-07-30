import NavigationBar from "@/components/NavBar";
import NavBarProps from "@/interfaces/INavBarProps"

export default function CharacterForm(){
    const navigation: NavBarProps[] = [
        {
            title:"Front Page",
            url:"/"
        },
        {
            title:"Party List",
            url:"/party"
        }
    ];

    return(
        <div>
            <header>
                <h2>Create a new character</h2>
                <br />
                <NavigationBar links={navigation} />
            </header>
        </div>
    )
}