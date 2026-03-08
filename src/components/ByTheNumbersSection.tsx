export function ByTheNumbersSection() {
    const stats = [
        {
            value: "800+",
            label: "National media appearances across television, radio, and digital platforms."
        },
        {
            value: "Billions",
            label: "Total media impressions and views worldwide."
        },
        {
            value: "$12 Billion",
            label: "Lifetime income secured for veterans through benefits they earned in service."
        },
        {
            value: "8 Figures",
            label: "Company built in just two years serving the veteran community."
        },
        {
            value: "3 Major Film Projects",
            label: "The Bodyman, The Hales, and Modern Day Marilyn."
        },
        {
            value: "1 Professional Basketball Team",
            label: "Ownership involvement with the San Diego Surf."
        }
    ];

    return (
        <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-20 space-y-4">
                    <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">Kate Monroe</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter">
                        By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 italic">Numbers</span>
                    </h2>
                    <p className="content-safe-text max-w-2xl mx-auto pt-4">
                        A career built through discipline, leadership, and relentless execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#0f0f0f] border border-white/10 p-8 rounded-xl hover:border-primary/50 transition-colors duration-500 group relative overflow-hidden">
                            <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                            <h3 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-4 pb-4 border-b border-white/10 group-hover:border-primary/30 transition-colors">
                                {stat.value}
                            </h3>
                            <p className="content-safe-text text-sm md:text-base">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto bg-primary/10 border border-primary/20 rounded-xl p-10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <h3 className="text-2xl font-heading font-bold text-primary uppercase tracking-widest mb-6">1 Mission</h3>
                    <div className="space-y-2 text-xl md:text-3xl font-heading font-black text-white uppercase tracking-wider">
                        <p>Build influence.</p>
                        <p>Challenge systems.</p>
                        <p>Create opportunity.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
