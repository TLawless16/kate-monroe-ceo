import { Navbar } from "@/components/Navbar";
import { NewsAndPressSection } from "@/components/NewsAndPressSection";

export const metadata = {
    title: 'Press & Media | Kate Monroe',
    description: 'A News Powerhouse. Discover Kate Monroe\'s 800+ media appearances and billions of global impressions.',
}

export default function PressPage() {
    return (
        <main className="min-h-[100dvh] bg-background pt-24">
            <Navbar />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
                        Press & <span className="text-primary italic">Media</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-sans font-light italic max-w-2xl mx-auto">
                        Voice of Authority. Disruptor of Systems.
                    </p>
                </div>
            </div>

            {/* We can re-use the powerful NewsAndPressSection component from the homepage here for now */}
            <NewsAndPressSection />

            {/* Placeholder for future individual press clippings / video gallery */}
            <section className="py-24 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest mb-12">Featured Appearances</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="aspect-video bg-[#111] border border-white/10 flex items-center justify-center">
                                <span className="text-gray-600 font-heading uppercase text-sm tracking-widest">Awaiting Video UI</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
