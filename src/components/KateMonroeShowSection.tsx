import Image from "next/image";

export function KateMonroeShowSection() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden" id="podcast">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left side: Content */}
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase">
                                The Kate Monroe <span className="text-primary italic">Show</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-sans font-light leading-relaxed max-w-xl">
                                Dive deep into conversations about power, leadership, and rewriting the rules. Kate sits down with industry titans, disruptors, and cultural architects to explore what it truly takes to build an empire.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="#" className="px-8 py-4 bg-primary text-black font-heading font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                                Watch on YouTube
                            </a>
                            <a href="#" className="px-8 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
                                Listen on Spotify
                            </a>
                        </div>
                    </div>

                    {/* Right side: Podcast Cover / Latest Episode */}
                    <div className="flex-1 w-full max-w-2xl mx-auto md:mx-0">
                        <div className="relative aspect-[3/2] bg-zinc-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl group">
                            <Image
                                src="/kate-monroe-show.png"
                                alt="The Kate Monroe Show"
                                fill
                                className="object-fill transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500"></div>
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <span className="px-3 py-1 bg-primary text-black text-xs font-heading font-bold uppercase tracking-wider mb-3 inline-block">Latest Episode</span>
                                <h3 className="text-white font-heading font-bold text-2xl uppercase tracking-wide leading-tight">Building the Future of Media & Ownership</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
