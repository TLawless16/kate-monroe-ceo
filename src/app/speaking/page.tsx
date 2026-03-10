import { Navbar } from "@/components/Navbar";
import { SpeakingContent } from "@/components/SpeakingContent";

export const metadata = {
    title: 'Speaking | Kate Monroe',
    description: 'Book Kate Monroe for speaking engagements about leadership, culture, entrepreneurship, and the future of media.',
}

export default function SpeakingPage() {
    return (
        <main className="min-h-[100dvh] bg-background pt-24">
            <Navbar />
            <SpeakingContent />
        </main>
    );
}
