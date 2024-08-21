'use server'
import { connectDB } from "@/lib/mongo/mongodb";
import User from "../models/User";
import bcrypt from "bcryptjs"

export const login = async(values:any)=>{
    const {email, password} = JSON.parse(values);
    // console.log(email);
    // console.log(password);
    
    try{
        await connectDB();
        const userFound = await User.findOne({email});
        if(!userFound){
            console.log("error: no user found");
            throw new Error("No user found");
        }
        const passwordMatch = await bcrypt.compare(password, userFound.password);
        if(!passwordMatch){
            console.log("error: bad pass match");
            throw new Error("incorrect password");
        }
        return JSON.stringify(userFound);
    }
    catch(err:any){
        return JSON.stringify({error:err.message});
    }
}