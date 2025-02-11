import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

export default function Home(): React.JSX.Element {
    return(
        <>
            <BookOverview {...sampleBooks[0]}

            />
            <BookList
                title="Recently Added"
                books={sampleBooks}
                containerClassName="mt-28"
            />
        </>
    )
}