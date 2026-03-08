"use client";
import { useState } from "react";

export function EmailCaptureSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        socialHandle: "",
        role: "",
        message: "",
        goals: [] as string[]
    });

    const roles = ["CEO", "CMO", "Creator", "Founder", "Influencer", "Politician"];
    const goalsList = [
        "Self Branding", "News", "TV", "Radio", "As Seen On",
        "Socials Overhaul", "Vitality Coaching", "Speaking", "Media Training"
    ];

    const handleGoalChange = (goal: string) => {
        setFormData(prev => ({
            ...prev,
            goals: prev.goals.includes(goal)
                ? prev.goals.filter(g => g !== goal)
                : [...prev.goals, goal]
        }));
    };

    return (
        <section className="py-24 bg-primary relative overflow-hidden" id="empire">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-black rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase tracking-tighter mb-6">
                        Build Your <span className="italic font-outline-black text-transparent underline decoration-black underline-offset-8">Empire</span>
                    </h2>
                    <p className="text-xl text-black/80 font-sans font-medium max-w-2xl mx-auto">
                        Get exclusive access to unfiltered media strategies, behind-the-scenes empire building, and early invites to private wealth and leadership events.
                    </p>
                </div>

                <form className="max-w-3xl mx-auto bg-black/5 p-8 border border-black/10 shadow-2xl backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>

                    {/* Personal Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            placeholder="FIRST NAME"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="text"
                            placeholder="LAST NAME"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="PHONE NUMBER"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="text"
                            placeholder="SOCIAL HANDLE (@)"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                        />
                        <select
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all appearance-none"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>SELECT YOUR ROLE</option>
                            {roles.map(role => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>

                    {/* Goals Checkbox Grid */}
                    <div className="mb-8">
                        <label className="block text-black font-heading font-black tracking-widest uppercase mb-4 text-sm">Primary Goals (Select All That Apply):</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {goalsList.map(goal => (
                                <label key={goal} className="flex items-center space-x-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center w-5 h-5 border border-black/40 group-hover:border-black transition-colors bg-white/50">
                                        <input type="checkbox" className="peer sr-only" onChange={() => handleGoalChange(goal)} />
                                        <svg className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-black/80 font-sans text-sm uppercase tracking-wider group-hover:text-black transition-colors">{goal}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                        <textarea
                            placeholder="MESSAGE (MAX 200 CHARACTERS)"
                            maxLength={200}
                            rows={3}
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-16 py-5 bg-black text-white font-heading font-black uppercase tracking-widest hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300 shadow-xl"
                        >
                            Step Inside
                        </button>
                        <p className="text-xs text-black/60 font-sans mt-6 uppercase tracking-wider">
                            No spam. Just pure, unadulterated power moves. Unsubscribe anytime.
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
}
