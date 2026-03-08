import Image from "next/image";

interface AboutSectionProps {
    imageSrc?: string;
}

export function AboutSection({ imageSrc = "/kate-about.png" }: AboutSectionProps) {
    return (
        <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="order-1 lg:order-1 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase leading-none">
                            About <br /><span className="text-primary">Kate Monroe</span>
                        </h2>
                        <div className="space-y-6 text-base text-gray-300 font-sans font-light leading-normal">
                            <p>
                                Kate Monroe is a Marine Corps veteran, entrepreneur, producer, and media powerhouse known for challenging the status quo and building bold ventures across multiple industries. As CEO of VetComm, she has helped tens of thousands of veterans secure the benefits they earned through service, representing billions of dollars in lifetime compensation for those who defended the nation.
                            </p>
                            <p>
                                A former congressional candidate and author of <em>The Race to Save California</em>, Monroe has appeared in national and international media more than 800 times, with her commentary reaching billions of viewers worldwide.
                            </p>
                            <p>
                                Today she is expanding her influence into entertainment, media, and professional sports ownership through Monroe Media, producing projects that challenge traditional power structures and redefine who gets to participate in the success of modern storytelling.
                            </p>
                            <div className="pt-6">
                                <a href="/journey" className="inline-block px-10 py-4 bg-transparent border border-white text-white font-heading font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                    My Journey
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="order-2 lg:order-2 relative aspect-[3/4] w-full max-w-lg mx-auto">
                        <div className="absolute inset-0 bg-[#0a0a0a] rounded-sm border border-white/10 flex items-center justify-center overflow-hidden">
                            <Image
                                src={imageSrc}
                                alt="Kate Monroe Editorial Portrait"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20 z-10 pointer-events-none" />
                        </div>

                        {/* Decorative Classic Gold Accent */}
                        <div className="absolute -bottom-8 -right-8 w-full h-full border-b border-r border-primary/30 z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
}
