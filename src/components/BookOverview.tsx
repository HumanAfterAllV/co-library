import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

export default function BookOverview({
    id, 
    title,
    author,
    genre,
    rating,
    total_copies,
    available_copies,
    description,
    color,
    cover,
}: Book): React.JSX.Element {

    return(
        <section className="book-overview">
            <div className="flex flex-1 flex-col gap-5">
                <h1>{title}</h1>
                <div className="book-info">
                    <p>
                        By <span className="font-semibold text-yellow-200">{author}</span>
                    </p>
                    <p>
                        Category{" "}
                        <span className="font-semibold text-light-200">{genre}</span>
                    </p>
                    <div className="flex flex-row gap-1">
                        <Image src="/icons/star.svg" alt="start" width={22} height={22}/>
                        <p> Rating {rating} </p>
                    </div>
                </div>
                <div className="book-copies">
                    <p>Total Books: {total_copies}</p>
                    <p>Available Books: {available_copies}</p>
                </div>
                <p className="book-description">{description}</p>
                <Button className="book-overview_btn">
                    <Image src="/icons/book.svg" alt="book" width={22} height={22}/>
                    <p className="font-bebas-neue text-xl text-dark-100">
                        Borrow
                    </p>
                </Button>
            </div>
            <div className="relative flex flex-1 justify-center">
                <div className="relative">
                    <BookCover
                        variant="wide"
                        className="z-10"
                        coverColor={color}
                        coverImage={cover}
                    />
                </div>
                <div className="absolute left-16 top-10 rotate-12 opacity-40">
                    <BookCover
                        variant="wide"
                        className="z-10"
                        coverColor={color}
                        coverImage={cover}
                    />
                </div>
            </div>
        </section>
    )
}