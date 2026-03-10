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
// SanDiegoSurfSection moved to /projects page per Tim's directive
// import { SanDiegoSurfSection } from "@/components/SanDiegoSurfSection";
// CourseFunnelSection (Build Your Empire) hidden per Tim's directive — preserved for later
// import { CourseFunnelSection } from "@/components/CourseFunnelSection";
import { NewsAndPressSection } from "@/components/NewsAndPressSection";
import { AsSeenOnSection } from "@/components/AsSeenOnSection";
// EmailCaptureSection (Build Your Empire) hidden until Calendly integration ready
// import { EmailCaptureSection } from "@/components/EmailCaptureSection";

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
      {/* SanDiegoSurfSection moved to /projects page */}
      {/* CourseFunnelSection (Build Your Empire) hidden — not deleted */}
      <NewsAndPressSection />
      {/* EmailCaptureSection hidden until Calendly integration ready */}
    </main>
  );
}
