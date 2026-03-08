import Link from "next/link";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" className="font-heading text-2xl font-black uppercase tracking-widest text-white">
                    Kate Monroe<span className="text-primary">.</span>
                </Link>
                <div className="hidden md:flex space-x-8 font-sans text-sm font-medium tracking-wider text-gray-300 uppercase">
                    <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/books" className="hover:text-primary transition-colors">Books</Link>
                    <Link href="/#media" className="hover:text-primary transition-colors">Media</Link>
                    <Link href="/#speaking" className="hover:text-primary transition-colors">Speaking</Link>
                </div>
                <button className="md:hidden text-white" aria-label="Toggle mobile menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
        </nav>
    );
}
