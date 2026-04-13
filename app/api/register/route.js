import User from "@/app/lib/models/user";
import db from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name,email,password} =await request.json()
    await db()

    const newUser = {
        name,
        email,
        password,
        
    }
    try{
        await User.create(newUser)
        return new NextResponse("User has been created", {
      status: 201,
    });
    }
    catch(err)
    {
       console.error(err); 
       return new NextResponse(err.message, {
      status: 500,
    });
    }
}