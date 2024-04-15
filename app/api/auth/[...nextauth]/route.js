import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import Users from "@/app/models/users";
import { connectToMongoDB } from "@/app/lib/mongodb";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks: {
        async signIn({user, account}) {
            if(account.provider === 'google') {
                const {email, name} = user;

                try{
                    await connectToMongoDB();
                    const userExists = await Users.findOne({email});

                    if(!userExists) {
                        const res = await fetch("http://localhost:3000/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                            email,
                            name
                            }),
                        })
                    }
                } catch (error) {
                    console.log("Unable to add user.", error);
                }
            }

            return user;
        }
    }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }