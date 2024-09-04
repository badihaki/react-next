'use client';

import CharacterForm from "@/lib/components/CharacterForm";
import RouteGuard from "@/lib/components/routeGuard";
import { useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";

export default function NewCharacterForm(){    
    const user = useAppSelector( (state:RootState) => state.user );

    return(
        <div>
            {
                user.email === "" ?
                <RouteGuard />
                :
                <div>
                    <h2>Create a new character</h2>
                    <br />
                    <section id="instructions">
                        Welcome, user. Here you can create a new character. You can choose to store this character in the party, or delete them from here.
                        <br />
                        <CharacterForm />
                        <br />
                    </section>
                </div>
            }
            
        </div>
    )
}