export function MediaComingSoon() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden" id="media">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase mb-6">
                    Monroe <span className="text-gray-500 italic font-light">Media</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-12"></div>
                <div className="inline-block border border-primary/30 bg-primary/5 px-12 py-8 rounded-sm">
                    <p className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-widest uppercase mb-3">
                        Coming Soon
                    </p>
                    <p className="text-base text-gray-400 font-sans font-light">
                        Something bold is in the works. Stay tuned.
                    </p>
                </div>
                {/* Hidden buttons — preserved for future use per Tim's directive */}
                {/* <button>Brand Development</button> */}
                {/* <button>Media Training</button> */}
            </div>
        </section>
    );
}
