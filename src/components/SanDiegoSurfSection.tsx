import Image from "next/image";

export function SanDiegoSurfSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="surf">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase mb-2">
                            San Diego <span className="text-primary italic">Surf</span>
                        </h2>
                        <div className="w-16 h-1 bg-primary mb-6"></div>

                        <div className="space-y-6 text-lg text-gray-300 font-sans font-light leading-relaxed">
                            <p>
                                The San Diego Surf are bringing professional basketball back to the Nation’s Finest City with energy, innovation, and a bold new vision for sports ownership. As part of the revitalized USBL, the Surf are not just building a team — they are building a movement.
                            </p>
                            <p>
                                With elite athletes, passionate fans, and new models for community participation, the Surf aim to create a deeper connection between the game and the people who love it.
                            </p>
                            <p className="text-xl text-white font-medium italic">
                                In San Diego, basketball is rising on a whole new tide.
                            </p>
                        </div>

                        <div className="pt-6">
                            <button className="px-8 py-3 border border-primary text-primary font-heading uppercase tracking-widest text-sm transition-all hover:bg-primary hover:text-black font-bold">
                                Get Tickets
                            </button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative aspect-video w-full max-w-lg mx-auto bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden group rounded-sm">
                        <Image src="/black-coat.png" alt="San Diego Surf Kate Monroe" fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-blue-900/40 opacity-80 group-hover:opacity-40 transition-opacity duration-700 z-10 pointer-events-none" />
                        <span className="text-white font-heading uppercase tracking-widest text-sm relative z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">San Diego Surf</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
