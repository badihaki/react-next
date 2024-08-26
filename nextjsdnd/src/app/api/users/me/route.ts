import { connectDB } from "@/lib/mongo/mongodb";
import { NextRequest } from "next/server";

connectDB();

export async function GET(request:NextRequest) {
    try{}
    catch(err:any){}
}