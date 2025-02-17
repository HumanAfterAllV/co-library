"use server"

import { db } from "@/db";
import { users } from "@/db/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { signIn } from "@/auth";
import { headers } from "next/headers";

import rateLimit from "../ratelimit";
import { redirect } from "next/navigation";


export const signInWithCredentials = async (params: Pick<AuthCredentials, "email" | "password">): Promise<{ success: boolean, error?: string }> => {

    const { email, password } = params;

    const ip = (await headers()).get("x-forwarded-for") || "128.0.0.1";
    const { success } = await rateLimit.limit(ip)

    if(!success){
        return redirect ("/too-fast")
    }

    try{
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if(result?.error){
            return {
                success: false,
                error: result.error,
            }
        }

        return {
            success: true,
        }    
    }
    catch(e){
        console.log(e, "Error signing in user");
        return {
            success: false,
            error: "Error signing in user",
        }
    }
};

export const signUp = async (params: AuthCredentials): Promise<{ success: boolean; error?: string }> => {

    const { fullName, email, password, universityId } = params;

    const ip = (await headers()).get("x-forwarded-for") || "128.0.0.1";
    const { success } = await rateLimit.limit(ip)

    if(!success){
        return redirect ("/too-fast")
    }

    const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    if (existingUser.length > 0) {
        return {
            success: false,
            error: "User already exists",
        };
    }

    const hashedPassword = await hash(password, 10);

    try {
        await db.insert(users).values({
            fullName,
            email,
            password: hashedPassword,
            universityId,
        });

        return {
            success: true,
        };
    } 
    catch (e) {
        console.error(e, "Error signing up user");
        return {
            success: false,
            error: "Error signing up user",
        };
    }
};
