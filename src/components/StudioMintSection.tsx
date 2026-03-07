import Image from "next/image";

export function StudioMintSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-background relative overflow-hidden" id="studiomint">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
                        <div className="absolute inset-0 border border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="w-[90%] h-[90%] border border-white/5 rounded-full"></div>
                        </div>
                        <div className="absolute inset-6 rounded-full overflow-hidden z-0 flex items-center justify-center bg-black">
                            <Image src="/studio-mint-logo.png" alt="Studio Mint Logo" fill className="object-contain transition-all duration-700 hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                            <h3 className="text-4xl font-heading font-black text-white tracking-widest uppercase">Studio</h3>
                            <h3 className="text-5xl font-heading font-black text-primary tracking-widest uppercase">Mint</h3>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase mb-2">
                            Breaking <br /> The Model
                        </h2>
                        <div className="w-16 h-1 bg-primary mb-6"></div>

                        <div className="space-y-6 text-lg text-gray-300 font-sans font-light leading-relaxed">
                            <p>
                                Studio Mint is designed to break the century-old Hollywood financing model. For decades studios and gatekeepers controlled who could participate in the success of film and media.
                            </p>
                            <p className="text-2xl text-white font-medium italic">
                                Studio Mint flips that script.
                            </p>
                            <p>
                                By combining technology, storytelling, and community participation, it opens the door for audiences, talent, and creators to share in the upside of the stories they help bring to life.
                            </p>
                            <p>
                                The mission is simple but revolutionary: unlock the value of entertainment and allow the people who believe in a project to participate in its success.
                            </p>
                        </div>

                        <div className="pt-6">
                            <button className="px-8 py-3 border border-white/20 text-white font-heading uppercase tracking-widest text-sm transition-all hover:border-primary hover:text-primary">
                                Learn About Mint
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
