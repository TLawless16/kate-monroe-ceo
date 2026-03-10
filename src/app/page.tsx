import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ByTheNumbersSection } from "@/components/ByTheNumbersSection";
// MonroeMediaSection hidden per Tim's directive — preserved for later use
// import { MonroeMediaSection } from "@/components/MonroeMediaSection";
import { MediaComingSoon } from "@/components/MediaComingSoon";
import { KateMonroeShowSection } from "@/components/KateMonroeShowSection";
import { FilmAndMediaSection } from "@/components/FilmAndMediaSection";
import { StudioMintSection } from "@/components/StudioMintSection";
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
      <MediaComingSoon />
      <KateMonroeShowSection />
      <FilmAndMediaSection />
      <StudioMintSection />
      <SanDiegoSurfSection />
      <CourseFunnelSection />
      <NewsAndPressSection />
      <EmailCaptureSection />
    </main>
  );
}
