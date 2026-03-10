import { Navbar } from "@/components/Navbar";

export const metadata = {
    title: 'Speaking | Kate Monroe',
    description: 'Book Kate Monroe for speaking engagements about leadership, culture, entrepreneurship, and the future of media.',
}

export default function SpeakingPage() {
    return (
        <main className="min-h-[100dvh] bg-background pt-24">
            <Navbar />

            <section className="py-24 relative overflow-hidden text-center">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
                        Work with <span className="text-primary italic">Kate</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-100 font-sans font-light leading-relaxed">
                        Kate Monroe is available for select speaking engagements, media appearances, partnerships, and creative collaborations. Known for her commanding presence and engaging communication style, Monroe brings insight, energy, and real-world experience to every stage and platform she enters.
                    </p>

                    <p className="text-base text-gray-100 font-sans font-light leading-relaxed">
                        From keynote presentations to media interviews and entertainment collaborations, Monroe engages audiences with powerful conversations about leadership, culture, entrepreneurship, and the future of media.
                    </p>

                    <div className="pt-12">
                        <a href="mailto:Kryzta@MonroeMedia.com?subject=Speaking%20Booking%20Request%20-%20Kate%20Monroe" className="inline-block px-12 py-5 bg-primary text-black font-heading font-black uppercase tracking-widest text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(255,215,0,0.2)]">
                            Request Booking
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
