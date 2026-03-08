import Image from "next/image";

export function CourseFunnelSection() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden" id="courses">
            {/* Background Image / Texture */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/course-bg.jpg" alt="Kate Monroe Courses" fill className="object-cover object-center opacity-10 grayscale mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase relative inline-block">
                        Build Your <span className="text-primary italic">Empire</span>
                        <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    </h2>
                    <p className="text-xl text-gray-400 font-sans font-light max-w-2xl mx-auto pt-6">
                        Stop asking for permission. Master the media, command the room, and scale your brand with elite training from the CEO who disrupted the system.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Course 1 */}
                    <div className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/50 flex flex-col">
                        <div className="order-2 md:order-1 aspect-video bg-[#111] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                            <Image src="/entrepreneur-office.png" alt="Media Authority Masterclass" fill className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <span className="px-3 py-1 bg-white text-black text-xs font-heading font-bold uppercase tracking-wider mb-2 inline-block">Flagship Program</span>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-2">Media Authority Masterclass</h3>
                            <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-8 flex-grow">
                                A grueling, immersive 6-week blueprint to dominate local and national PR. Learn exactly how Kate booked over 800+ media appearances and built a billion-impression empire from scratch.
                            </p>
                            <a href="#" className="w-full py-4 border border-primary text-primary text-center font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
                                Enroll Now
                            </a>
                        </div>
                    </div>

                    {/* Course 2 */}
                    <div className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/50 flex flex-col">
                        <div className="order-2 md:order-1 aspect-video bg-[#111] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                            <Image src="/black-hat.png" alt="The Executive Presence" fill className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 object-top" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <span className="px-3 py-1 bg-primary text-black text-xs font-heading font-bold uppercase tracking-wider mb-2 inline-block">Intensive</span>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-2">The Executive Presence</h3>
                            <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-8 flex-grow">
                                Stop blending in. This tactical intensive teaches CEOs, founders, and leaders how to walk into any boardroom, stage, or on-camera interview and command absolute authority.
                            </p>
                            <a href="#" className="w-full py-4 border border-primary text-primary text-center font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
                                Join the Waitlist
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
