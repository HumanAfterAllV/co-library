"use client"

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";

export default function Page(): React.JSX.Element {
    return(
        <>
            <AuthForm
                type="SIGN_IN"
                schema={signInSchema}
                defaultValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={signInWithCredentials}
                
            />            
        </>
    )
}