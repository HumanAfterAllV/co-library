export default function Page(): React.JSX.Element {
    return(
        <main className="root-container flex min-h-screen flex-col items-center justify-center">
            <h1 className="font-bebas-neue text-5xl font-bold text-light-100">Slow Down There...</h1>
            <p className="text-light-200 text-center">It seems like you're moving too fast. Take a break and try again later.</p>
        </main>
    )
}