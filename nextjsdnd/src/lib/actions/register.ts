"use server"
import { connectDB } from "@/lib/mongo/mongodb"
import User from "../models/User"
import bcrypt from "bcryptjs"
import { use } from "react"

export const register = async(values:any) =>{
    const {email, password} = JSON.parse(values);
    console.log(email);
    console.log(password);


    try{
        await connectDB();
        const userFound = await User.findOne({email});
        if(userFound){
            return{
                error:"Email already exists"
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword
        });
        const savedUser = await user.save();
        return JSON.stringify(savedUser);
    }
    catch(error){
        console.log(error);
        return JSON.stringify(error);
    }
}