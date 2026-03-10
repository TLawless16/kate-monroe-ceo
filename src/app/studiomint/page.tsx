import { Navbar } from "@/components/Navbar";
import { StudioMintSection } from "@/components/StudioMintSection";
import { StudioMintVideoSection } from "@/components/StudioMintVideoSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio Mint | Kate Monroe, CEO",
    description: "Studio Mint is breaking the century-old Hollywood financing model. By combining technology, storytelling, and community participation, it opens the door for audiences, talent, and creators to share in the upside of the stories they help bring to life.",
    openGraph: {
        title: "Studio Mint | Kate Monroe, CEO",
        description: "Breaking the century-old Hollywood financing model. Technology, storytelling, and community participation — combined.",
        url: "https://katemonroeceo.com/studiomint",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Studio Mint | Kate Monroe, CEO",
        description: "Breaking the century-old Hollywood financing model.",
    },
};

export default function StudioMintPage() {
    return (
        <main className="min-h-[100dvh] bg-background">
            <Navbar />
            <div className="pt-24">
                <StudioMintSection />
                <StudioMintVideoSection />
            </div>
        </main>
    );
}
