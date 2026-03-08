"use client";

import Image from "next/image";
import { useState } from "react";

export function SanDiegoSurfSection() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="surf">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-1 lg:order-1 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase mb-2">
                            San Diego <span className="text-primary italic">Surf</span>
                        </h2>
                        <div className="w-16 h-1 bg-primary mb-6"></div>

                        <div className="content-safe-text">
                            <p>
                                The San Diego Surf are bringing professional basketball back to the Nation’s Finest City with energy, innovation, and a bold new vision for sports ownership. As part of the revitalized USBL, the Surf are not just building a team — they are building a movement.
                            </p>
                            <p>
                                With elite athletes, passionate fans, and new models for community participation, the Surf aim to create a deeper connection between the game and the people who love it.
                            </p>
                            <p className="text-lg text-white font-medium italic">
                                In San Diego, basketball is rising on a whole new tide.
                            </p>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsVideoModalOpen(true)}
                                className="inline-block px-8 py-3 border border-primary text-primary font-heading uppercase tracking-widest text-sm transition-all hover:bg-primary hover:text-black font-bold focus:outline-none"
                            >
                                Team Introduction
                            </button>
                            <a href="https://sdsurfbasketball.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-white text-white font-heading uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-black font-bold">
                                SD Surf Website
                            </a>
                        </div>
                    </div>

                    <div className="order-2 lg:order-2 relative aspect-[4/5] w-full max-w-md mx-auto bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden group rounded-sm">
                        <Image src="/san-diego-surf.png" alt="San Diego Surf Kate Monroe" fill className="object-cover object-top transition-all duration-700 z-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 z-10 pointer-events-none" />
                    </div>

                </div>
            </div>

            {/* Local Video Modal */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4">
                    <button
                        onClick={() => setIsVideoModalOpen(false)}
                        className="absolute top-8 right-8 text-white/70 hover:text-primary transition-colors focus:outline-none"
                        aria-label="Close Video"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <div className="relative w-full max-w-5xl aspect-video rounded overflow-hidden shadow-2xl border border-white/10 bg-black">
                        <video
                            src="/videos/team-intro.mp4"
                            className="w-full h-full object-contain"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
