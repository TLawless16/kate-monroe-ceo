import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";

const books = [
    {
        title: "WAKE UP READY",
        tagline: "Opportunity favors the prepared.",
        description: "Wake Up Ready is a call to action for anyone determined to stop waiting for opportunity and start creating it. Drawing from her journey as a Marine Corps veteran, entrepreneur, and national media voice, Kate Monroe shares the mindset, discipline, and preparation required to step into leadership and build momentum in life and business. This book challenges readers to develop the habits, resilience, and readiness needed to seize opportunity when it appears—and to create it when it doesn't.",
        website: "https://www.wakeupreadybook.com/",
        videoUrl: "https://youtu.be/aN9taoFPdwo",
        image: "/images/books/wake-up-ready-cover.jpg" // placeholder path, user to supply
    },
    {
        title: "THE RACE TO SAVE CALIFORNIA",
        tagline: "A plan to restore leadership before it's too late.",
        description: "The Race to Save California is a bold examination of the policies, leadership failures, and cultural shifts that have pushed one of America's most important states to a breaking point. Written from the perspective of a congressional candidate and national media voice, the book lays out a direct and unapologetic blueprint for restoring accountability, opportunity, and common sense leadership in California. More than a political critique, the book is a call for citizens to re-engage, demand better leadership, and take responsibility for the future of their state.",
        website: "https://www.theracetosaveca.com/",
        videoUrl: null,
        image: "/images/books/race-to-save-ca-cover.jpg" // placeholder path, user to supply
    },
    {
        title: "THE BODYMAN",
        tagline: "When power is corrupt, someone has to fight back.",
        description: "The Bodyman brings readers inside a high-stakes political battle where corruption, organized crime, and power collide. When a fearless outsider runs for office against a powerful politician tied to the cartel, the race quickly becomes something far more dangerous than a campaign. Surrounded by a loyal security and strategy team known as the Bodyman crew, she sends a clear message to those who have long controlled the system: the old rules no longer apply. Blending political intrigue, suspense, and action, The Bodyman explores what happens when someone decides to challenge the most powerful forces operating behind the scenes.",
        website: "https://www.bodymanbook.com/",
        videoUrl: null,
        image: "/images/books/the-bodyman-cover.jpg" // placeholder path, user to supply
    }
];

export default function BooksPage() {
    return (
        <main className="min-h-[100dvh] bg-background">
            <Navbar />

            {/* Books Hero Section */}
            <section className="relative pt-32 pb-16 flex items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#111]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tighter uppercase leading-[0.85] mb-6">
                        Books.
                    </h1>
                    <h2 className="text-xl md:text-2xl text-primary font-heading font-bold uppercase tracking-widest mb-8">
                        Fearless Perspective <span className="text-white/30 mx-2">•</span> Powerful Storytelling
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-sans font-light leading-relaxed">
                        Challenging broken systems, embracing leadership, and taking ownership of the future.
                    </p>
                </div>
            </section>

            {/* Books Content Section */}
            <section className="relative z-10 py-24 bg-background px-6">
                <div className="max-w-7xl mx-auto space-y-32">
                    {books.map((book, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                            {/* Book Cover / Media Side */}
                            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[64px]" />
                                <div className="w-full max-w-md aspect-[2/3] bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl relative">
                                    {/* Fallback styling for when image is missing/placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center bg-[#0a0a0a]">
                                        <span className="text-slate-600 text-sm font-bold uppercase tracking-widest mb-4">Awaiting Cover UI</span>
                                        <span className="text-white text-2xl font-black uppercase leading-tight font-heading">{book.title}</span>
                                    </div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-500 hover:opacity-100" // Will show if actual image is placed and loaded over fallback
                                    />
                                </div>
                            </div>

                            {/* Text Content Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight">
                                    {book.title}
                                </h3>
                                <h4 className="text-xl text-primary font-heading font-bold tracking-widest uppercase">
                                    {book.tagline}
                                </h4>
                                <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    {book.description}
                                </p>

                                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                    <a href={book.website} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button variant="primary" className="w-full justify-center">Visit Official Site</Button>
                                    </a>
                                    {book.videoUrl && (
                                        <a href={book.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                            <Button variant="outline" className="w-full justify-center border-white/20 hover:bg-white/5">Watch Interview</Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
