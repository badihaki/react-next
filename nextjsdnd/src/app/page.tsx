'use client';

import NavBarProps from "@/interfaces/INavBarProps";
import NavigationBar from "@/components/NavBar";

export default function Home() {

  const navigation: NavBarProps[] = [
    {
      title: "Party List",
      url: "/party"
    },
    {
      title: "New Character",
      url: "/newcharacter"
    },
    {
      title: "User",
      url: "/auth"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>DnD Party Builder</h1>
      </header>
      <summary>
        <h4>Build and manage your party for your DnD campaigns</h4>
      </summary>
      <section>
        <div>
          Use this app to build your DnD parties for campaigns and adventures. You can add characters to your party with the character form, manage the party as a whole in the party list, and manage individal members on their character page.
        </div>
      </section>
      <br />
      <nav>
        <NavigationBar links={navigation} />
      </nav>
    </main>
  );
}
