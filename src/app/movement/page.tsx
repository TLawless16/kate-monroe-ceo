import { Navbar } from "@/components/Navbar";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export const metadata = {
    title: 'The Movement | Kate Monroe',
    description: 'Join the movement. Disrupt outdated systems, tell bold stories, and create a future where influence and ownership are no longer controlled by gatekeepers.',
}

export default function MovementPage() {
    return (
        <main className="min-h-[100dvh] bg-background pt-24">
            <Navbar />

            <section className="py-20 relative overflow-hidden text-center min-h-[60vh] flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-black z-10" />
                    <div className="absolute inset-0 bg-[url('/images/movement-bg.jpg')] bg-cover bg-center bg-no-repeat grayscale opacity-20" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-20 space-y-12">
                    <h1 className="text-6xl md:text-9xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                        The <span className="text-primary italic">Movement</span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-100 font-sans font-light leading-relaxed max-w-3xl mx-auto italic">
                        &ldquo;Power should never belong to a small circle of gatekeepers.&rdquo;
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>

                    <p className="text-base text-gray-100 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                        Kate Monroe is building more than a career in entertainment. She is building a new model for media ownership and storytelling. Her mission is clear: disrupt outdated systems, tell bold stories, and create a future where influence and ownership are no longer controlled by a small circle of gatekeepers.
                    </p>
                </div>
            </section>

            <CalendlyEmbed />
        </main>
    );
}
