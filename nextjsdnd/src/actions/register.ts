"use server"
import { connectDB } from "@/mongo/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import { use } from "react"

export const register = async(values:any) =>{
    const {email, password} = values;

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
    }
    catch(error){
        console.log(error);
    }
}