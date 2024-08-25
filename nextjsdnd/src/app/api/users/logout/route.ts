import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try{
        const respone = NextResponse.json({
            message:"Successfully Logged Out",
            success:true,
        });
        respone.cookies.set("token", "", {
            httpOnly:true,
            expires: new Date(0)
        })

        return respone;
    }
    catch(err:any){
        return NextResponse.json({ error:err.message }, { status: 500 });
    }
}