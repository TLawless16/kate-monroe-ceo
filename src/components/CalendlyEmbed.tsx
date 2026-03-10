"use client";

export function CalendlyEmbed({ url = "https://calendly.com/katemonroeceo" }: { url?: string }) {
    return (
        <section className="py-20 bg-background relative overflow-hidden" id="calendly">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-wider mb-4">
                        Book a <span className="text-primary">Meeting</span>
                    </h2>
                    <p className="text-gray-400 font-sans font-light max-w-xl mx-auto">
                        Schedule time directly with Kate Monroe.
                    </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-white/10 bg-white" style={{ minHeight: '700px' }}>
                    <iframe
                        src={url}
                        width="100%"
                        height="700"
                        frameBorder="0"
                        title="Schedule a meeting with Kate Monroe"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}
