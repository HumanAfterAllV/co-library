import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils"
;
import BookCover from "./BookCover";

export default function BookCard({id, title, genre, color, cover, isLoanedBook = false}: Book): React.JSX.Element {

    return(
        <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
            <Link href={`/books/${id}`} className={cn(isLoanedBook && "w-full flex flex-col items-center ")}>
                <BookCover coverColor={color} coverImage={cover} variant="regular"/>
                <div className={cn("mt-4", isLoanedBook && "xs:max-w-40 max-w-28")}>
                    <p className="book-title">{title}</p>
                    <p className="book-genre">{title}</p>
                </div>
                {isLoanedBook && (
                    <div className="mt-3 w-full">
                        <div className="book-loaned">
                            <Image 
                                src="/icons/calendar.svg"
                                alt="calendar"
                                width={18}
                                height={18}
                                className="object-contain" 
                            />
                        </div>
                    </div>
                )}
            </Link>
        </li>
    )
}