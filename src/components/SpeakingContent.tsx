"use client";

import { AppearanceContactForm } from "./AppearanceContactForm";

export function SpeakingContent() {
    return (
        <section className="py-24 relative overflow-hidden text-center">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
                <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
                    Work with <span className="text-primary italic">Kate</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-100 font-sans font-light leading-relaxed">
                    Kate Monroe is available for select speaking engagements, media appearances, partnerships, and creative collaborations. Known for her commanding presence and engaging communication style, Monroe brings insight, energy, and real-world experience to every stage and platform she enters.
                </p>

                <p className="text-base text-gray-100 font-sans font-light leading-relaxed">
                    From keynote presentations to media interviews and entertainment collaborations, Monroe engages audiences with powerful conversations about leadership, culture, entrepreneurship, and the future of media.
                </p>

                <div className="pt-12">
                    <AppearanceContactForm />
                </div>
            </div>
        </section>
    );
}
