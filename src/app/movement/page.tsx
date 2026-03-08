import { Navbar } from "@/components/Navbar";

export const metadata = {
    title: 'The Movement | Kate Monroe',
    description: 'Join the movement. Disrupt outdated systems, tell bold stories, and create a future where influence and ownership are no longer controlled by gamekeepers.',
}

export default function MovementPage() {
    return (
        <main className="min-h-[100dvh] bg-background pt-24">
            <Navbar />

            <section className="py-32 relative overflow-hidden text-center min-h-[80vh] flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-black z-10" />
                    {/* Placeholder for a massive background image */}
                    <div className="absolute inset-0 bg-[url('/images/movement-bg.jpg')] bg-cover bg-center bg-no-repeat grayscale opacity-20" />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-20 space-y-12">
                    <h1 className="text-6xl md:text-9xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                        The <span className="text-primary italic">Movement</span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto italic">
                        "Power should never belong to a small circle of gatekeepers."
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>

                    <p className="text-lg text-gray-400 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                        Kate Monroe is building more than a career in entertainment. She is building a new model for media ownership and storytelling. Her mission is clear: disrupt outdated systems, tell bold stories, and create a future where influence and ownership are no longer controlled by a small circle of gatekeepers.
                    </p>

                    {/* Email Capture placeholder as per requirements */}
                    <div className="pt-8 max-w-md mx-auto">
                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="px-6 py-4 bg-white/5 border border-white/20 text-white font-sans focus:outline-none focus:border-primary transition-colors text-center uppercase tracking-widest placeholder:text-gray-600"
                            />
                            <button type="submit" className="px-6 py-4 bg-primary text-black font-heading font-black uppercase tracking-widest hover:bg-white transition-colors">
                                Join the Movement
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
