export function StudioMintVideoSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left side: Text */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase mb-2">
                            The <span className="text-primary italic">Vision</span>
                        </h2>
                        <div className="w-16 h-1 bg-primary mb-6"></div>

                        <div className="space-y-6 text-base text-gray-100 font-sans font-light leading-normal">
                            <p>
                                Studio Mint isn't just a concept — it's a movement. For the first time, the people who believe in a story can participate in its success alongside the creators who bring it to life.
                            </p>
                            <p>
                                This is what happens when you combine Hollywood-quality storytelling with community-driven participation and next-generation technology.
                            </p>
                            <p className="text-base text-white font-medium italic">
                                Watch the vision come to life.
                            </p>
                        </div>

                        <div className="pt-6">
                            <a href="mailto:katieallyson1@gmail.com?subject=Studio%20Mint%20Inquiry" className="inline-block px-8 py-3 border border-primary text-primary font-heading uppercase tracking-widest text-sm transition-all hover:bg-primary hover:text-black font-bold">
                                Get Involved
                            </a>
                        </div>
                    </div>

                    {/* Right side: YouTube Video */}
                    <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <iframe
                            src="https://www.youtube.com/embed/JU94__NjSgo"
                            title="Studio Mint Vision"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
