import Character from "@/lib/models/Character";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try{
        const requestBody = await request.json();
        const { _id } = requestBody;

        // const characters = await Character.find().populate('user_id').exec();
        const user = await User.findById(_id).populate("characters").exec();

        console.log(user.characters);

        return NextResponse.json({message:"found characters:", success:true, characters:user.characters},{status:200});
    }
    catch(err:any){
        console.log(err.message);
        return NextResponse.json({error:err.message},{status:500})
    }
}