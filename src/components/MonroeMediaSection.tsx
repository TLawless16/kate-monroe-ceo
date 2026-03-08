import Image from "next/image";

export function MonroeMediaSection() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden" id="media">

            <div className="absolute inset-0 z-0">
                <Image src="/blazer.png" alt="Monroe Media Kate Monroe" fill className="object-cover object-top opacity-20 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left side: Graphic */}
                    <div className="order-2 lg:order-1 relative aspect-[2/3] w-full max-w-md mx-auto">
                        <Image
                            src="/media-section-graphic.png"
                            alt="Media Section Graphic"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Right side: Content */}
                    <div className="order-1 lg:order-2 space-y-12 text-center lg:text-left">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase">
                                Monroe <span className="text-gray-500 italic font-light">Media</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto lg:mx-0"></div>
                        </div>

                        <div className="text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed space-y-8">
                            <p className="text-2xl text-white font-medium font-heading tracking-wide uppercase">
                                Become the Face of Your Company.
                            </p>
                            <p>
                                In today’s media-driven world, the most powerful brands are led by visible, confident leaders. Monroe Media works with founders, executives, and entrepreneurs to help them step into that role—building authentic public brands and developing the confidence and skill to communicate clearly in front of cameras, audiences, and the press.
                            </p>
                            <p>
                                Through brand development, media strategy, and professional media training, Monroe Media helps leaders refine their message, strengthen their public presence, and become powerful voices for the companies and movements they represent.
                            </p>
                            <p>
                                Founded by Kate Monroe, Monroe Media also operates as a creative studio producing bold storytelling across film, television, and next-generation digital formats. From political thrillers and courtroom dramas to cinematic vertical entertainment designed for modern audiences, Monroe Media creates content that challenges systems and sparks conversation.
                            </p>
                            <p>
                                By combining entertainment production with brand development and leadership media training, Monroe Media represents a new generation of creator-led platforms where storytelling, influence, and leadership intersect.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
