import Character from "@/lib/models/Character";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    try{
        // const requestBody = await request.json();
        const characters = await Character.find().populate('user_id').exec();

        // console.log(requestBody);
        console.log(characters);
    }
    catch(err:any){
        console.log(err.message);
        return NextResponse.json({error:err.message},{status:500})
    }
}