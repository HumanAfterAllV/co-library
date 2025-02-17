"use client"

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

export default function Page(): React.JSX.Element {
    return(
        <>
            <AuthForm
                type="SIGN_UP"
                schema={signUpSchema}
                defaultValues={{
                    email: "",
                    password: "",
                    fullName: "",
                    universityId: 0,
                }}
                onSubmit={signUp}
            />
        </>
    
    )
}