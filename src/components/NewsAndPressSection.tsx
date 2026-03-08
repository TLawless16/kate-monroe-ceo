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
                    <div className="space-y-6 text-lg text-gray-100 font-sans font-light leading-relaxed">
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

                {/* Timeline / Evolution */}
                <div className="border-t border-white/10 pt-16">
                    <h3 className="text-2xl font-heading font-bold text-center text-white tracking-widest uppercase mb-12">The Evolution of Power</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["U.S. Marine Corps Veteran", "Entrepreneur & Advocate", "National Media Voice", "Congressional Candidate", "Film & TV Producer", "Sports Ownership", "Hollywood Disruptor"].map((item, i) => (
                            <span key={i} className="px-6 py-2 border border-white/20 rounded-full text-sm font-sans text-gray-100 hover:border-primary hover:text-primary transition-all cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
