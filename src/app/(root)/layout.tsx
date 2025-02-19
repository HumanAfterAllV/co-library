import { ReactNode } from "react";
import { after } from "next/server";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";
import { auth } from "@/auth";

import Header from "@/components/Header";

export default async function Layout({ children } : { children: ReactNode }) {

    const session = await auth();
    if(!session) redirect("/sign-in");

    after(async () => {
        if(!session?.user?.id) return;

        await db.update(users).set({ lastActivityDate: new Date().toISOString().slice(0, 10)})
        .where(eq(users.id, session?.user?.id))
    })

    return (
        <main className="root-container">
            <div className="mx-auto max-w-7xl">
                <Header session={session}/>
                <div className="mt-20 pb-20">
                    {children}
                </div>
            </div>
        </main>
    )
}