import Header from "@/components/layout/Header";
import HeroSection from "@/components/content/HeroSection";
import SideBar from "@/components/layout/SideBar";
import MainContent from "@/components/content/MainContent";
import Recomendation from "@/components/content/Recomendation";

export default function Home() {
  return (
    <div>
      <Header />

      <SideBar />

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
