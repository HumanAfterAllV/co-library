import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

export default function Page(): React.JSX.Element {
    return(
        <>
            <form action={async () => {
                "use server";

                await signOut()
            }}
            className="mb-10"
            >
                <Button>
                    Logout
                </Button>
            </form>

            <BookList title="Borrewed Books" books={sampleBooks}/>
        </>
    )
}