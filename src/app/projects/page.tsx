import { Navbar } from "@/components/Navbar";
import { SanDiegoSurfSection } from "@/components/SanDiegoSurfSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Kate Monroe, CEO",
    description: "Kate Monroe's portfolio of bold ventures across entertainment, sports ownership, and community-driven innovation. From professional basketball to next-generation media.",
    openGraph: {
        title: "Projects | Kate Monroe, CEO",
        description: "Bold ventures across entertainment, sports ownership, and community-driven innovation.",
        url: "https://katemonroeceo.com/projects",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects | Kate Monroe, CEO",
        description: "Bold ventures across entertainment, sports ownership, and community-driven innovation.",
    },
};

export default function ProjectsPage() {
    return (
        <main className="min-h-[100dvh] bg-background">
            <Navbar />
            <div className="pt-24">
                <SanDiegoSurfSection />
            </div>
        </main>
    );
}
