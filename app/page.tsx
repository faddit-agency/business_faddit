import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { UserStories } from "@/components/user-stories";
import { Logos } from "@/components/logos";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { MoodImage } from "@/components/mood-image";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <UserStories />
        <Logos />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <MoodImage />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
