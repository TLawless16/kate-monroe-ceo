import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
    title: 'My Journey | Kate Monroe',
    description: 'The Evolution of Power: From the U.S. Marine Corps to National Media Voice, Entrepreneur, and Professional Sports Owner.',
}

export default function JourneyPage() {
    return (
        <main className="min-h-[100dvh] bg-background pt-24">
            <Navbar />

            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8 mb-24">
                    <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">My Journey</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
                        The Evolution of <span className="text-primary italic">Power</span>
                    </h1>

                    <div className="content-safe-text text-left">
                        <p>
                            Power rarely arrives overnight. It is built through resilience, risk, relentless work, and the willingness to step into arenas most people are too afraid to enter. Kate Monroe’s journey—from the United States Marine Corps to entrepreneurship, national media, politics, entertainment, and professional sports—has been defined by an unwavering belief that influence is earned by those willing to take action.
                        </p>
                        <p>
                            At every stage of her career, Monroe has challenged systems, built new platforms, and stepped forward when others hesitated. From helping veterans secure billions in earned benefits, to appearing hundreds of times across national media, to producing films and launching ventures designed to disrupt traditional industries, her path has been driven by the same core principles: courage, discipline, vision, and relentless execution.
                        </p>
                        <p>
                            But the journey is far from finished. Monroe believes the next generation of leaders, entrepreneurs, and creators must learn how to step into influence, build powerful personal brands, and shape the future rather than simply reacting to it. The Evolution of Power is not just the story of Kate Monroe—it is a roadmap for anyone ready to build something meaningful, take ownership of their voice, and step into the arena.
                        </p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="space-y-16">
                        {/* Timeline Item 1 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-2 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">U.S. Marine Corps Veteran</h3>
                                    <p className="content-safe-text">
                                        Kate Monroe’s journey began in the United States Marine Corps, where discipline, resilience, and leadership became the foundation of everything that followed. Military service forged the mindset required to operate under pressure, lead decisively, and stay mission-focused when the stakes are high. The lessons learned in uniform continue to shape how Monroe builds teams, companies, and movements today.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-1 md:order-2">
                                    <Image src="/marine-corps-portrait.png" alt="U.S. Marine Corps Veteran" width={800} height={800} className="w-full h-auto object-cover" priority />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-2 md:order-2">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Entrepreneur</h3>
                                    <p className="content-safe-text">
                                        After leaving the Marine Corps, Monroe entered the world of entrepreneurship with the same mission-driven mindset she carried in service. In just two years, she built an eight-figure company that helped veterans secure more than $12 billion in lifetime income through the benefits they earned in service. Entrepreneurship became the proving ground where leadership, innovation, and execution combined to create measurable impact.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-1 md:order-1">
                                    <Image src="/entrepreneur-office.png" alt="Entrepreneur" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-2 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">National Media Voice</h3>
                                    <p className="content-safe-text">
                                        As her work gained national attention, Monroe became a recognizable voice across major media platforms. With more than 800 appearances across television, radio, and digital outlets, her commentary has reached billions of viewers worldwide. Known for her direct and unapologetic style, Monroe quickly established herself as a powerful voice in the national conversation.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-1 md:order-2">
                                    <Image src="/news-anchor.png" alt="National Media Voice" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 4 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-2 md:order-2">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Congressional Candidate</h3>
                                    <p className="content-safe-text">
                                        Driven by a desire to challenge broken systems, Monroe stepped into the political arena and ran for Congress. Her campaign focused on accountability, leadership, and restoring trust in institutions many Americans feel have failed them. The experience reinforced her belief that real change requires people willing to challenge entrenched power.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-1 md:order-1">
                                    <Image src="/congressional-candidate.png" alt="Congressional Candidate" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 5 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-2 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Filmmaker & Media Creator</h3>
                                    <p className="content-safe-text">
                                        Through Monroe Media, Kate Monroe expanded into film and entertainment, producing bold storytelling across cinematic films and digital series. Projects like The Bodyman, The Hales, and Modern Day Marilyn blend themes of politics, culture, and influence with compelling storytelling. Her work is designed to challenge traditional narratives and open new doors for creators and audiences.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-1 md:order-2">
                                    <Image src="/film-set-direction.png" alt="Filmmaker" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 6 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-2 md:order-2">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Professional Sports Owner</h3>
                                    <p className="content-safe-text">
                                        Monroe’s influence now extends into professional sports through the San Diego Surf, part of the revitalized USBL. The team represents a new model for fan participation, community ownership, and modern sports engagement. For Monroe, sports are not just competition—they are another arena where culture, leadership, and innovation intersect.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-1 md:order-1">
                                    <Image src="/arena-basketball.png" alt="Professional Sports Owner" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 7 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group pb-12">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-2 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Hollywood Finance & Film Disruptor</h3>
                                    <p className="content-safe-text">
                                        Through Monroe Media and ventures like Studio Mint, Monroe is challenging the traditional Hollywood financing model. Her vision is to open new pathways for audiences, creators, and talent to participate in the success of the stories they help bring to life. By combining storytelling, technology, and new ownership structures, she is working to reshape how entertainment is funded and who gets to benefit from it.
                                    </p>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-1 md:order-2">
                                    <Image src="/hollywood-night.png" alt="Hollywood Finance" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
