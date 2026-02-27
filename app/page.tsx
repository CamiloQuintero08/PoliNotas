import Header from "@/components/layout/Header";
import HeroSection from "@/components/content/HeroSection";
import MainContent from "@/components/content/MainContent";
import Recomendation from "@/components/content/Recomendation";

export default function Home() {
  return (
    <div>
      <Header />

      <section>
        <HeroSection />
      </section>

      <section>
        <MainContent />
      </section>

      <section>
        <Recomendation />
      </section>
    </div>
  );
}