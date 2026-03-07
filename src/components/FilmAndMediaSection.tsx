"use client";

import Image from "next/image";
import { useState } from "react";

export function FilmAndMediaSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="films">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase mb-4">
                        Film & <span className="text-primary">Media</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-400 font-sans font-light leading-relaxed">
                        Kate Monroe’s growing film and media slate reflects a portfolio of projects designed to challenge traditional storytelling and production models. Through Monroe Media she is developing cinematic films, high-end vertical series, and cultural projects that merge entertainment with powerful themes about influence, politics, identity, and legacy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* The Hales */}
                    <div className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/50">
                        <div className="aspect-[3/4] bg-[#111] relative">
                            <Image src="/hales-promo.jpeg" alt="The Hales" fill className="object-contain" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent opacity-80 z-10" />
                        </div>
                        <div className="p-8 relative z-20">
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">The Hales</h3>
                                <a href="#films" className="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors" title="Watch Trailer">
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </a>
                            </div>
                            <p className="text-sm text-primary font-heading tracking-widest uppercase mb-4">Feature-Quality Vertical Drama</p>
                            <p className="text-gray-400 text-sm font-sans font-light leading-relaxed line-clamp-4">
                                The series follows the unraveling of a powerful marriage after the mysterious death of Sebastian Hale, thrusting his wife Alexandra into the center of a media frenzy and a high-stakes murder investigation.
                            </p>
                        </div>
                    </div>

                    {/* The Bodyman */}
                    <div className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/50">
                        <div className="aspect-[3/4] bg-[#111] relative">
                            <Image src="/the-body-man.jpeg" alt="The Bodyman" fill className="object-contain" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent opacity-80 z-10" />
                        </div>
                        <div className="p-8 relative z-20">
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">The Bodyman</h3>
                                <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors" title="Watch Trailer">
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </a>
                            </div>
                            <p className="text-sm text-primary font-heading tracking-widest uppercase mb-4">Political Thriller</p>
                            <p className="text-gray-400 text-sm font-sans font-light leading-relaxed line-clamp-4">
                                A gritty political thriller about power, corruption, and the people willing to fight back when the system is rigged. The race becomes far more dangerous than anyone expected.
                            </p>
                        </div>
                    </div>

                    {/* Modern Day Marilyn */}
                    <div className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/50">
                        <div className="aspect-[3/4] bg-[#111] relative">
                            <Image src="/modern-day-marilyn.jpeg" alt="Modern Day Marilyn" fill className="object-contain" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent opacity-80 z-10" />
                        </div>
                        <div className="p-8 relative z-20">
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">Modern Day Marilyn</h3>
                                <a href="#films" className="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors" title="Watch Trailer">
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </a>
                            </div>
                            <p className="text-sm text-primary font-heading tracking-widest uppercase mb-4">Cinematic Concept</p>
                            <p className="text-gray-400 text-sm font-sans font-light leading-relaxed line-clamp-4">
                                A bold cinematic concept exploring what happens when the essence of an icon refuses to disappear and instead finds a new vessel to carry its power into a new era.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Video Modal overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-8 right-8 text-white/70 hover:text-primary transition-colors focus:outline-none"
                        aria-label="Close Video"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <div className="relative w-full max-w-5xl aspect-video rounded overflow-hidden shadow-2xl border border-white/10 bg-black">
                        <iframe
                            src="https://player.vimeo.com/video/1133646633?autoplay=1&title=0&byline=0&portrait=0"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
