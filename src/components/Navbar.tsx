"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-heading text-2xl font-black uppercase tracking-widest text-white">
                    Kate Monroe<span className="text-primary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-sans text-sm font-medium tracking-wider text-gray-100 uppercase">
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/journey" className="hover:text-primary transition-colors">My Journey</Link>
                    <Link href="/books" className="hover:text-primary transition-colors">Books</Link>
                    <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                    {/* Media nav item hidden per Tim's directive — preserved for later */}
                    {/* <Link href="/#media" className="hover:text-primary transition-colors">Media</Link> */}
                    <Link href="/studiomint" className="hover:text-primary transition-colors">Studio Mint</Link>
                    <Link href="/speaking" className="hover:text-primary transition-colors">Speaking</Link>
                    <Link href="/press" className="hover:text-primary transition-colors">Press</Link>
                    <Link href="/movement" className="hover:text-primary transition-colors">Movement</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    aria-label="Toggle mobile menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-white/10 px-6 py-4 space-y-4 shadow-xl">
                    <Link href="/about" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/journey" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>My Journey</Link>
                    <Link href="/books" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Books</Link>
                    <Link href="/projects" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Projects</Link>
                    {/* Media mobile nav hidden per Tim's directive */}
                    {/* <Link href="/#media" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Media</Link> */}
                    <Link href="/studiomint" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Studio Mint</Link>
                    <Link href="/speaking" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Speaking</Link>
                    <Link href="/press" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Press</Link>
                    <Link href="/movement" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Movement</Link>
                    <Link href="/blog" className="block text-gray-100 font-sans text-sm font-medium uppercase tracking-wider hover:text-primary" onClick={() => setIsOpen(false)}>Blog</Link>
                </div>
            )}
        </nav>
    );
}
