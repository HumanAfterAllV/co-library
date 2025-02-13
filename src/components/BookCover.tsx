import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";


type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";


type BookCoverProps = {
    className?: string;
    variant: BookCoverVariant;
    coverColor: string;
    coverImage: string;
}


const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
}

export default function BookCover({className, variant = "regular", coverColor, coverImage}: BookCoverProps): React.JSX.Element {
    return(
        <div className={cn("relative transition-all duration-300", variantStyles[variant], className)}>
            <BookCoverSvg coverColor={coverColor}/>
            <div className="absolute z-10" style={{left: "12%", width: "87.5%", height: "88%"}}>
                <Image src={coverImage} alt="Bok cover" fill className="rounded-sm object-fill"/>
            </div>
        </div>
    )
}