export function NewsAndPressSection() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden" id="press">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase">
                        A News <span className="text-primary">Powerhouse</span>
                    </h2>
                    <p className="text-xl text-gray-100 font-sans font-light italic max-w-2xl mx-auto">
                        Not Just Famous. Formidable.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    <div className="space-y-6 text-base text-gray-100 font-sans font-light leading-relaxed">
                        <p>
                            Kate Monroe has become one of the most recognizable independent voices in modern media. With more than 800 news appearances across television, radio, and digital platforms, her commentary has reached audiences in the billions worldwide.
                        </p>
                        <p>
                            Known for her fearless perspective and direct style, Monroe has appeared on major networks including Fox News, Newsmax, and OANN, along with numerous national and international publications.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 items-start">
                        <div className="border border-white/10 p-6 flex flex-col justify-center bg-[#0a0a0a]">
                            <h3 className="text-5xl font-heading text-primary font-bold mb-2">800+</h3>
                            <p className="text-sm font-sans text-gray-100 uppercase tracking-wider">Media Appearances</p>
                        </div>
                        <div className="border border-white/10 p-6 flex flex-col justify-center bg-[#0a0a0a]">
                            <h3 className="text-5xl font-heading text-primary font-bold mb-2">Billions</h3>
                            <p className="text-sm font-sans text-gray-100 uppercase tracking-wider">Global Impressions</p>
                        </div>
                    </div>
                </div>

                {/* Featured Videos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10">
                        <iframe
                            src="https://www.youtube.com/embed/h70o7QeyxLI?start=45"
                            title="Yahoo Finance Appearance"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                    <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10">
                        <iframe
                            src="https://www.youtube.com/embed/66FrNuS5N4M?start=271"
                            title="Fox News Appearance"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                    <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10">
                        <iframe
                            src="https://www.youtube.com/embed/DMQ4Xksyamg"
                            title="Dr. Phil Appearance"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Kate's YouTube Channel */}
                <div className="text-center mb-20">
                    <h3 className="text-2xl font-heading font-bold text-white tracking-widest uppercase mb-6">Kate Monroe on YouTube</h3>
                    <a href="https://www.youtube.com/@Kate.Monroe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-heading font-bold uppercase tracking-widest hover:bg-red-500 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        Subscribe to Kate Monroe
                    </a>
                </div>

                {/* Contact for Appearances */}
                <div className="text-center mb-20">
                    <a href="mailto:Kryzta@MonroeMedia.com?subject=Appearance%20Inquiry%20-%20Kate%20Monroe" className="inline-block px-10 py-4 border border-primary text-primary font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
                        Contact for Appearances
                    </a>
                </div>

                {/* As Seen On Marquee */}
                <div className="w-full flex overflow-hidden mask-image-gradient mb-20 -mx-6 px-6">
                    <div className="flex w-max animate-marquee space-x-16 px-8 items-center">
                        {[
                            "Forbes", "FOX", "Glamour", "Dr Phil", "LA Times",
                            "Daily Mail", "Washington Examiner", "NYP", "NEWSMAX", "CBS", "NBC"
                        ].map((logo, index) => (
                            <div key={index} className="flex-none px-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <h5 className="text-2xl font-black font-heading text-white uppercase tracking-tighter whitespace-nowrap">
                                    {logo}
                                </h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Evolution of Power section removed per Tim's directive — preserved in git history */}
            </div>
        </section>
    );
}
