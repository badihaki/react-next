import Character from "@/lib/models/Character";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request:NextRequest) {
    try{
        const requestBody = await request.json();
        const { name, charClass, user_id } = requestBody;

        const newChar = await new Character({
            name,
            charClass,
            level:1,
            notes:"",
            user_id
        })

        const user = await User.findById(user_id);
        const characters = user.characters;

        await User.updateOne({_id:user_id},{
            characters: [...characters, newChar._id]
        })

        await newChar.save();

        return NextResponse.json({
            message: "Character created, have fun!",
            success:true,
            character:newChar
        },{status:200})
    }
    catch(err:any){
        console.log(err.message);
        return NextResponse.json({error:err.message},{status:500});
    }
}