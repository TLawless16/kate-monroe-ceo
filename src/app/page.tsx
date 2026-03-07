import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { MonroeMediaSection } from "@/components/MonroeMediaSection";
import { FilmAndMediaSection } from "@/components/FilmAndMediaSection";
import { StudioMintSection } from "@/components/StudioMintSection";
import { SanDiegoSurfSection } from "@/components/SanDiegoSurfSection";
import { NewsAndPressSection } from "@/components/NewsAndPressSection";
import { AsSeenOnSection } from "@/components/AsSeenOnSection";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <MonroeMediaSection />
      <FilmAndMediaSection />
      <StudioMintSection />
      <SanDiegoSurfSection />
      <NewsAndPressSection />
    </main>
  );
}
