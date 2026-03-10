import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ByTheNumbersSection } from "@/components/ByTheNumbersSection";
import { MonroeMediaSection } from "@/components/MonroeMediaSection";
// KateMonroeShowSection hidden per Tim's directive — preserved for later use
// import { KateMonroeShowSection } from "@/components/KateMonroeShowSection";
import { FilmAndMediaSection } from "@/components/FilmAndMediaSection";
// StudioMintSection moved to /studiomint page per Tim's directive
// import { StudioMintSection } from "@/components/StudioMintSection";
import { SanDiegoSurfSection } from "@/components/SanDiegoSurfSection";
import { CourseFunnelSection } from "@/components/CourseFunnelSection";
import { NewsAndPressSection } from "@/components/NewsAndPressSection";
import { AsSeenOnSection } from "@/components/AsSeenOnSection";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <ByTheNumbersSection />
      <MonroeMediaSection />
      {/* KateMonroeShowSection removed from homepage — hidden, not deleted */}
      <FilmAndMediaSection />
      {/* StudioMintSection moved to /studiomint page */}
      <SanDiegoSurfSection />
      <CourseFunnelSection />
      <NewsAndPressSection />
      <EmailCaptureSection />
    </main>
  );
}
