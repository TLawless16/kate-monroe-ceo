"use client";

export function EmailCaptureSection() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-black rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase tracking-tighter mb-6">
                    Join The <span className="italic font-outline-black text-transparent underline decoration-black underline-offset-8">Inner Circle</span>
                </h2>

                <p className="text-xl text-black/80 font-sans font-medium max-w-2xl mx-auto mb-12">
                    Get exclusive access to unfiltered media strategies, behind-the-scenes empire building, and early invites to private wealth and leadership events.
                </p>

                <form className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="FIRST NAME"
                        className="flex-1 px-6 py-5 bg-black/10 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                        required
                    />
                    <input
                        type="email"
                        placeholder="EMAIL ADDRESS"
                        className="flex-1 px-6 py-5 bg-black/10 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                        required
                    />
                    <button
                        type="submit"
                        className="px-10 py-5 bg-black text-white font-heading font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl"
                    >
                        Step Inside
                    </button>
                </form>

                <p className="text-xs text-black/60 font-sans mt-6 uppercase tracking-wider">
                    No spam. Just pure, unadulterated power moves. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}
