import User from "@/lib/models/User";
import { connectDB } from "@/lib/mongo/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request:NextRequest) {
    try{
        const requestBody = await request.json();
        const { email, password } = requestBody;

        // can we find a user?
        const userFound = await User.findOne({email});
        if(!userFound){
            return NextResponse.json({ error: "User doesn't exist" },{status:400});
        }

        // is the password given matching the hashed/salted pass?
        const validPassword = await bcrypt.compare(password, userFound.password);
        if(!validPassword){
            return NextResponse.json({error:"Wrong password"}, {status:400});
        }

        // all checks passed
        // make json web token
        const tokenData = {
            id:userFound._id,
            username:userFound.username,
            email:userFound.email,
        }
        const token = await jwt.sign(tokenData, process.env.AUTH_SECRET!, {expiresIn:"1d"});

        const response = NextResponse.json({
            message:"Login Successful",
            success:true,
            user:{
                username: userFound.username,
                email: userFound.email,
                _id: userFound._id
            },
        });

        response.cookies.set("token", token, {
            httpOnly:true,
        });

        return response;
    }
    catch(err:any){
        return NextResponse.json({error:err.message}, {status:500});
    }
}