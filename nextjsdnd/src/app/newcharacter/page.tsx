'use client';

import CharacterForm from "@/lib/components/CharacterForm";
import { useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";

export default function NewCharacterForm(){    
    const user = useAppSelector( (state:RootState) => state.user );

    return(
        <div>
            <header>
                <h2>Create a new character</h2>
                <br />
                { user.email != "" ? <>
                    <section id="instructions">
                        Welcome, user. Here you can create a new character. You can choose to store this character in the party, or delete them from here.
                        <br />
                        <CharacterForm />
                        <br />
                    </section>
                    </> : <>
                        You need to log in or sign up
                        <br />
                    </>
                     }
            </header>
        </div>
    )
}