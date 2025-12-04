import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { UserStories } from "@/components/user-stories";
import { Logos } from "@/components/logos";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { MoodImage } from "@/components/mood-image";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <UserStories />
        <Logos />
        <Features />
        <HowItWorks />
        <MoodImage />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
