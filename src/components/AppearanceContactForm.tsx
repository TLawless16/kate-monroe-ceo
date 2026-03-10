"use client";

import { useState } from "react";

export function AppearanceContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact/appearance", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("sent");
                setFormData({ name: "", phone: "", email: "", message: "" });
                setTimeout(() => {
                    setIsOpen(false);
                    setStatus("idle");
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-block px-10 py-4 border border-primary text-primary font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors"
            >
                Contact for Appearances
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
                    <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-sm p-8 shadow-2xl">
                        <button
                            onClick={() => { setIsOpen(false); setStatus("idle"); }}
                            className="absolute top-4 right-4 text-white/50 hover:text-primary transition-colors"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider mb-6">
                            Book an <span className="text-primary">Appearance</span>
                        </h3>

                        {status === "sent" ? (
                            <div className="text-center py-8">
                                <p className="text-xl text-primary font-heading font-bold uppercase tracking-widest">Message Sent!</p>
                                <p className="text-gray-400 mt-2">We&apos;ll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-black border border-white/20 text-white font-sans placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 bg-black border border-white/20 text-white font-sans placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-black border border-white/20 text-white font-sans placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Tell us about the appearance opportunity..."
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-black border border-white/20 text-white font-sans placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-4 bg-primary text-black font-heading font-black uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
                                >
                                    {status === "sending" ? "Sending..." : status === "error" ? "Error — Try Again" : "Send Request"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
