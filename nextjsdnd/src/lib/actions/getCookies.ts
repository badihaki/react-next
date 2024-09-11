import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (request:NextRequest)=>{
    try{
        const token = request.cookies.get("token")?.value || "";
        const decodedToken:any = jwt.verify(token, process.env.AUTH_SECRET!);
        return decodedToken.id; // we decode the token to retrieve the token id
    }
    catch(err:any){
        throw new Error(err.message);
    }
}