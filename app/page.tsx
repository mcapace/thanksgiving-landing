import SponsoredBar from "@/components/SponsoredBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import RecipeBookCTA from "@/components/RecipeBookCTA";
import RecipeGrid from "@/components/RecipeGrid";
import GiveawaySection from "@/components/GiveawaySection";
import SweepstakesSection from "@/components/SweepstakesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SponsoredBar />
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <RecipeBookCTA />
        <RecipeGrid />
        <GiveawaySection />
        <SweepstakesSection />
        <Footer />
      </main>
    </>
  );
}
