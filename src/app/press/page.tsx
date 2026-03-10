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
                    <p className="text-xl text-gray-100 font-sans font-light italic max-w-2xl mx-auto">
                        Voice of Authority. Disruptor of Systems.
                    </p>
                </div>
            </div>

            {/* We can re-use the powerful NewsAndPressSection component from the homepage here for now */}
            <NewsAndPressSection />

            {/* Featured Appearances removed per Tim's directive */}
        </main>
    );
}
