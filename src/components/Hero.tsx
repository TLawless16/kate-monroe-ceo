import { Button } from "./Button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[#111]" />
                {/* Subtle gold flare to match Logo 7 */}
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter uppercase leading-[0.85] mb-6">
                    Kate <br className="hidden md:block" /> Monroe.
                </h1>
                <h2 className="text-2xl md:text-4xl text-primary font-heading font-bold uppercase tracking-widest mb-8">
                    Modern Fame <span className="text-white/30 mx-2">•</span> Real Power
                </h2>
                <p className="max-w-3xl mx-auto text-base md:text-base text-gray-100 font-sans font-light mb-8 leading-normal">
                    Building the Future of Media, Ownership, and Culture. <br />
                    <span className="text-white font-medium mt-2 block italic">Not Just Famous. Formidable.</span>
                </p>
                {/* Buttons hidden per Tim's directive — preserved for later */}
                {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                    <Button variant="primary">Enter The Empire</Button>
                    <Button variant="outline">View Media</Button>
                </div> */}
            </div>
        </section>
    );
}
