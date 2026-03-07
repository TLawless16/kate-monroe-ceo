export function AsSeenOnSection() {
    const logos = [
        "Forbes",
        "FOX",
        "Glamour",
        "Dr Phil",
        "LA Times",
        "Daily Mail",
        "Washington Examiner",
        "NYP",
        "NEWSMAX",
        "CBS",
        "NBC"
    ];

    // Double the array to ensure seamless infinite scrolling
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-12 bg-[#050505] border-y border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
            <h4 className="text-primary font-heading uppercase tracking-[0.2em] text-xs font-bold mb-8 text-center">
                As Seen On
            </h4>

            <div className="w-full flex overflow-hidden mask-image-gradient">
                <div className="flex w-max animate-marquee space-x-16 px-8 items-center">
                    {marqueeLogos.map((logo, index) => (
                        <div key={index} className="flex-none px-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            {/* For a premium look without SVGs, we use stylized typography to represent the logos */}
                            <h5 className="text-2xl font-black font-heading text-white uppercase tracking-tighter whitespace-nowrap">
                                {logo}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
