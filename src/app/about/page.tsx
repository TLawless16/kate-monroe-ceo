import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";

export const metadata = {
    title: 'About | Kate Monroe',
    description: 'Learn more about Kate Monroe: CEO, Marine Corps veteran, entrepreneur, and media powerhouse.',
}

export default function AboutPage() {
    return (
        <main className="min-h-[100dvh] bg-background pt-24">
            <Navbar />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
                        The <span className="text-primary italic">CEO</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-sans font-light italic max-w-2xl mx-auto">
                        Marine Corps Veteran. Entrepreneur. Media Powerhouse.
                    </p>
                </div>
            </div>

            <AboutSection imageSrc="/coat.png" />

            <section className="py-24 bg-black border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl font-heading font-bold text-white uppercase tracking-wider">
                        Signature <span className="text-primary">Quotes</span>
                    </h2>
                    <div className="space-y-6 text-lg md:text-xl text-gray-300 font-sans font-light italic py-8">
                        <p>"Power should never belong to a small circle of gatekeepers."</p>
                        <p>"Stories shape culture. Ownership shapes the future."</p>
                        <p>"Modern fame comes with real responsibility."</p>
                        <p>"Disruption is not chaos. It is the beginning of change."</p>
                        <p>"Legacy is not what you inherit. It is what you build."</p>
                        <p className="text-primary font-medium">"Not Just Famous. Formidable."</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
