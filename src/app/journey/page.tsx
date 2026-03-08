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

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8 mb-24">
                    <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">My Journey</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
                        The Evolution of <span className="text-primary italic">Power</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-heading text-primary font-medium tracking-wide uppercase mt-4">
                        Influence. Ownership. Legacy.
                    </p>

                    <div className="content-safe-text text-left mt-8 space-y-4">
                        <p>
                            Power is rarely handed to anyone. It is built through discipline, risk, relentless work, and the willingness to step into arenas most people are too afraid to enter. Kate Monroe’s journey—from the United States Marine Corps to entrepreneurship, national media, politics, filmmaking, professional sports ownership, and Hollywood disruption—has been defined by one principle: step forward when others hesitate.
                        </p>
                        <p>
                            At every stage of her career, Monroe challenged systems, built new platforms, and expanded her influence. From helping veterans secure billions in earned benefits, to appearing hundreds of times across national media, to producing films and launching ventures designed to reshape industries, each chapter required courage, resilience, and relentless execution.
                        </p>
                        <p>
                            The Evolution of Power is not just the story of Kate Monroe’s rise. It is a blueprint for how influence is built in the modern world—and how those willing to step into leadership can shape the future.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="space-y-16">
                        {/* Timeline Item 1 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-1 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">U.S. Marine Corps Veteran</h3>
                                    <div className="content-safe-text space-y-4">
                                        <p>
                                            Kate Monroe’s journey began in the United States Marine Corps, where discipline, resilience, and leadership became the foundation for everything that followed. Military service forged the mindset required to operate under pressure, make decisions quickly, and stay mission-focused in high-stakes environments. The Marine Corps instilled a deep respect for accountability, teamwork, and perseverance.
                                        </p>
                                        <p>
                                            These principles became the backbone of Monroe’s leadership style in every arena she entered afterward. The discipline developed in uniform created the mental framework that made future risks possible. The lessons learned in service continue to influence how she builds companies, teams, and movements today.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-heading font-bold text-white uppercase mb-2">What it took to move forward</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                <li>Discipline and mental toughness developed through military training</li>
                                                <li>Learning to lead under pressure and take responsibility for outcomes</li>
                                                <li>Sacrificing comfort, stability, and personal time in service to a larger mission</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-2 md:order-2">
                                    <Image src="/marine-corps-hero.png" alt="U.S. Marine Corps Veteran" width={800} height={800} className="w-full h-auto object-cover" priority />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-1 md:order-2">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Entrepreneur</h3>
                                    <div className="content-safe-text space-y-4">
                                        <p>
                                            After leaving the Marine Corps, Monroe stepped into entrepreneurship with the same mission-driven mindset she carried in service. Determined to build something meaningful, she launched and scaled businesses while navigating the risks and realities of leadership. Entrepreneurship became the proving ground where ideas had to translate into execution.
                                        </p>
                                        <p>
                                            In just two years she built an eight-figure company that helped veterans secure more than $12 billion in lifetime income through the benefits they earned in service. The work created measurable impact for thousands of families across the country. It also proved that bold ideas combined with relentless execution could produce extraordinary results.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-heading font-bold text-white uppercase mb-2">What it took to move forward</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                <li>Relentless work ethic and willingness to take financial risk</li>
                                                <li>Building and leading teams capable of scaling a mission</li>
                                                <li>Sacrificing stability, sleep, and comfort to build something from nothing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-2 md:order-1">
                                    <Image src="/entrepreneur-office.png" alt="Entrepreneur" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-1 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">National Media Voice</h3>
                                    <div className="content-safe-text space-y-4">
                                        <p>
                                            As her work began attracting attention, Monroe stepped into national media as a commentator and public voice. What began as a few interviews quickly turned into hundreds of appearances across television, radio, and digital platforms. Her direct communication style and willingness to speak plainly resonated with audiences across the country.
                                        </p>
                                        <p>
                                            Today Monroe has appeared in more than 800 media interviews, with commentary reaching billions of viewers worldwide. National media gave her the platform to influence conversations around leadership, culture, policy, and entrepreneurship. It also placed her in a spotlight where every word carried weight.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-heading font-bold text-white uppercase mb-2">What it took to move forward</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                <li>Confidence to speak publicly and defend strong viewpoints</li>
                                                <li>Learning how media narratives shape influence and perception</li>
                                                <li>Accepting criticism and scrutiny that come with public visibility</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-2 md:order-2">
                                    <Image src="/news-anchor.png" alt="National Media Voice" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 4 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-1 md:order-2">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Congressional Candidate</h3>
                                    <div className="content-safe-text space-y-4">
                                        <p>
                                            Driven by a desire to challenge broken systems, Monroe stepped into the political arena and ran for Congress. The campaign required translating conviction into leadership on a public stage where stakes were national and scrutiny was constant. Running for office revealed both the challenges and the importance of leadership in shaping public policy.
                                        </p>
                                        <p>
                                            The experience deepened Monroe’s understanding of power structures and the responsibility that comes with influence. It reinforced her belief that real change requires people willing to challenge entrenched systems. The campaign became another chapter in a life defined by stepping into the arena.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-heading font-bold text-white uppercase mb-2">What it took to move forward</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                <li>Courage to challenge powerful institutions publicly</li>
                                                <li>Building coalitions and inspiring supporters around a mission</li>
                                                <li>Sacrificing privacy and comfort to stand in the public arena</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-2 md:order-1">
                                    <Image src="/congressional-candidate.png" alt="Congressional Candidate" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 5 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-1 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Filmmaker & Media Creator</h3>
                                    <div className="content-safe-text space-y-4">
                                        <p>
                                            Through Monroe Media, Kate Monroe expanded into film and entertainment as a producer and storyteller. Projects like The Bodyman, The Hales, and Modern Day Marilyn blend cultural commentary with cinematic storytelling. These productions allow Monroe to shape narratives that reach audiences far beyond traditional platforms.
                                        </p>
                                        <p>
                                            The entertainment industry presented new gatekeepers and challenges, but Monroe saw storytelling as one of the most powerful tools for cultural influence. By creating films and series with bold themes, she began building a platform where ideas could reach global audiences. Film became another arena for leadership and creative disruption.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-heading font-bold text-white uppercase mb-2">What it took to move forward</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                <li>Learning a completely new industry and creative discipline</li>
                                                <li>Building relationships with actors, directors, and producers</li>
                                                <li>Investing time, capital, and reputation into ambitious projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-2 md:order-2">
                                    <Image src="/film-set-direction.png" alt="Filmmaker" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 6 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-1 md:order-2">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Professional Sports Owner</h3>
                                    <div className="content-safe-text space-y-4">
                                        <p>
                                            Monroe’s influence expanded into professional sports through ownership involvement with the San Diego Surf, part of the revitalized USBL. Sports represent one of the most powerful cultural platforms in the world. Through ownership, Monroe entered an arena where leadership, community, and business intersect.
                                        </p>
                                        <p>
                                            The Surf represent a new model for fan engagement and modern sports ownership. The goal is to build a team that reflects innovation, excitement, and community participation. Sports became another stage where Monroe could combine business leadership with cultural impact.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-heading font-bold text-white uppercase mb-2">What it took to move forward</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                <li>Entering a highly competitive and capital-intensive industry</li>
                                                <li>Learning the dynamics of sports ownership and team leadership</li>
                                                <li>Investing resources and leadership into building a professional franchise</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-2 md:order-1">
                                    <Image src="/arena-basketball.png" alt="Professional Sports Owner" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 7 */}
                        <div className="border-l-2 border-white/10 pl-8 md:pl-12 relative group pb-12">
                            <div className="absolute -left-[5px] top-3 w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
                                <div className="flex-1 order-1 md:order-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4 md:mb-6">Hollywood Finance & Film Disruptor</h3>
                                    <div className="content-safe-text space-y-4">
                                        <p>
                                            Through Monroe Media and ventures like Studio Mint, Monroe began challenging the traditional Hollywood financing model. For decades a small group of studios control how films were funded and who could participate in their success. Monroe’s vision is to open new pathways where creators, audiences, and talent share in the value of the stories they help create.
                                        </p>
                                        <p>
                                            By combining storytelling, technology, and new participation models, Monroe aims to reshape how entertainment is funded and distributed. The mission is not simply to produce films but to redefine the power structure behind them. Hollywood disruption is the next frontier in her evolution of influence.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-heading font-bold text-white uppercase mb-2">What it took to move forward</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                <li>Challenging deeply entrenched industry systems</li>
                                                <li>Innovating new models for film financing and participation</li>
                                                <li>Accepting skepticism and resistance that comes with disruption</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-[#0a0a0a] order-2 md:order-2">
                                    <Image src="/hollywood-night.png" alt="Hollywood Finance" width={800} height={800} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closing Section */}
                    <div className="mt-32 max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-wider">
                                Power is Built, Not Given
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary to-transparent mx-auto"></div>
                        </div>

                        <div className="content-safe-text text-center space-y-6 md:text-xl">
                            <p>
                                Every stage of Kate Monroe’s journey has been built the same way—through discipline, risk, resilience, and relentless execution. From the Marine Corps to entrepreneurship, national media, politics, filmmaking, and industry disruption, each chapter required stepping forward when others hesitated.
                            </p>
                            <p>
                                The truth is simple: influence does not happen by accident. It is built intentionally by those willing to develop their voice, take responsibility for their platform, and lead when the moment demands it.
                            </p>
                            <p>
                                Through Monroe Media, Kate Monroe now helps founders, executives, and creators do the same—transforming their expertise and stories into powerful public brands.
                            </p>
                            <p className="pt-8 font-medium italic text-gray-300">
                                Because in the modern world:
                            </p>
                        </div>

                        <div className="pt-8 pb-16">
                            <p className="text-4xl md:text-6xl font-heading font-black text-primary uppercase tracking-tighter mix-blend-lighten drop-shadow-lg">
                                Influence is the New Currency.
                            </p>
                            <p className="text-lg md:text-xl font-heading text-white font-medium tracking-wide uppercase mt-8 opacity-70 border-t border-white/10 pt-8 max-w-lg mx-auto">
                                Influence. Ownership. Legacy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
