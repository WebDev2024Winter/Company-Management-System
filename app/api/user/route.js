import { connectToMongoDB } from "@/app/lib/mongodb";
import Users from "@/app/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, name } = await request.json();
    await connectToMongoDB();
    await Users.create({name, email});
    return NextResponse.json({ message: "User Registered" }, { status: 201 })
}