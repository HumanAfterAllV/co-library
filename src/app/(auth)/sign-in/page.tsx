"use client"

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";

export default function Page(): React.JSX.Element {
    return(
        <AuthForm
            type="SIGN_IN"
            schema={signInSchema}
            defaultValues={{
                email: "",
                password: ""
            }}
            onSubmit={() =>{}}
        />            
    )
}