import Link from "next/link";

export default function Header(): React.JSX.Element {
    return(
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">Co_Library</Link>
            <ul className="flex flex-row items-center gap-5">
                <li>
                    <Link href="/library" className="text-base cursor-pointer capitalize">
                        Library
                    </Link>
                </li>
            </ul>

        </header>
    )
}