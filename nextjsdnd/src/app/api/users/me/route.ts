import { getDataFromToken } from "@/lib/actions/getCookies";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request:NextRequest) {
    try{
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id:userId}).select("-password");

        return NextResponse.json({
            message:"User Found",
            userData: user,
        });
    }
    catch(err:any){
        return NextResponse.json(
            {
                error:err.message
            },
            {
                status: 400,
            }
        )
    }
}