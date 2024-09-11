import Character from "@/lib/models/Character";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try{
        const requestBody = await request.json();
        const { _id } = requestBody;

        // MUST have character model in memory (as far as I can tell)
        const char = new Character(); // ensures we have the model/schema in-memory

        // const characters = await Character.find().populate('user_id').exec();
        const user = await User.findById(_id).populate("characters").exec();

        // console.log(characters);
        console.log(user);

        return NextResponse.json({message:"found characters:", success:true, characters:user.characters},{status:200});
    }
    catch(err:any){
        console.log(err.message);
        return NextResponse.json({error:err.message},{status:500})
    }
}