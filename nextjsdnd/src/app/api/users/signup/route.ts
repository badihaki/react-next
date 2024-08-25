// import { authOptions } from "@/lib/mongo/auth/auth";
// import NextAuth from "next-auth";
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

// this is old stuff

import { connectDB } from "@/lib/mongo/mongodb";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server"
import brypt from "bcryptjs";

connectDB();

export async function POST(request:NextRequest) {
    try{
        const requestBody = await request.json();
        const { username, email, password } = requestBody;

        const emailTaken = await User.findOne({email}); // has the email already been taken?
        if(emailTaken){
            return NextResponse.json({error:"Email already taken; user possibly already exists."},{status:400});
        }

        const salt = await brypt.genSalt(10);
        const hashedPass = await brypt.hash(password, salt); // encrypt password

        const newUser = await new User({
            username,
            email,
            password:hashedPass,
        }).save();

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: {
                username:newUser.username,
                email:newUser.email,
                _id:newUser._id,
            }
        })
    }
    catch(err:any){
        return NextResponse.json({error:err.message}, {status:500});
    }
}