import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import RecipeGrid from "@/components/RecipeGrid";
import GiveawaySection from "@/components/GiveawaySection";
import SweepstakesSection from "@/components/SweepstakesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <RecipeGrid />
      <GiveawaySection />
      <SweepstakesSection />
      <Footer />
    </main>
  );
}
