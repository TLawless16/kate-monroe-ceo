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

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            // Post to Mission Control backend (running locally or deployed)
            const missionControlUrl = process.env.NEXT_PUBLIC_MISSION_CONTROL_URL || 'http://localhost:3333';

            const response = await fetch(`${missionControlUrl}/api/email/lead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    email: formData.email,
                    phone: formData.phone,
                    inquiryType: `Role: ${formData.role} | Goals: ${formData.goals.join(", ")}`,
                    message: `Social Handle: ${formData.socialHandle}\n\n${formData.message}`.trim(),
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to submit form");
            }

            setStatus("success");
            // Reset form
            setFormData({
                firstName: "", lastName: "", phone: "", email: "", socialHandle: "", role: "", message: "", goals: []
            });

        } catch (error: any) {
            console.error("Form submission error:", error);
            setStatus("error");
            setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
        }
    };

    return (
        <section className="py-20 bg-primary relative overflow-hidden" id="empire">
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

                <form className="max-w-3xl mx-auto bg-black/5 p-8 border border-black/10 shadow-2xl backdrop-blur-sm" onSubmit={handleSubmit}>

                    {status === "success" && (
                        <div className="mb-6 bg-black text-white p-4 text-center font-heading tracking-widest uppercase">
                            Your inquiry has been received. We will be in touch shortly.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mb-6 bg-red-500/10 border border-red-500 text-red-700 p-4 text-center font-heading tracking-widest uppercase">
                            {errorMessage}
                        </div>
                    )}

                    {/* Personal Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="FIRST NAME"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="LAST NAME"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="PHONE NUMBER"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="EMAIL ADDRESS"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                            required
                        />
                        <input
                            type="text"
                            name="socialHandle"
                            value={formData.socialHandle}
                            onChange={handleInputChange}
                            placeholder="SOCIAL HANDLE (@)"
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all placeholder:text-black/50"
                        />
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-white/50 border border-black/20 text-black font-heading tracking-widest uppercase focus:outline-none focus:bg-white focus:border-black transition-all appearance-none"
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
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={formData.goals.includes(goal)}
                                            onChange={() => handleGoalChange(goal)}
                                        />
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
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
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
                            disabled={status === "loading"}
                            className="w-full md:w-auto px-16 py-5 bg-black text-white font-heading font-black uppercase tracking-widest flex items-center justify-center mx-auto hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Processing..." : "Step Inside"}
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
